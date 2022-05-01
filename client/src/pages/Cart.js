import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import Auth from "../utils/auth";
import { idbPromise } from "../utils/helpers";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, shoes: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQty;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const shoeIds = [];
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQty; i++) {
        shoeIds.push(item._id);
      }
    });
    getCheckout({
      variables: { shoes: shoeIds },
    });
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            Total: ${calculateTotal()}
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>Cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;
