import React, { useEffect } from 'react';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { idbPromise } from '../utils/helpers';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_CHECKOUT } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADD_SALE } from '../utils/mutations';
// import { STRIPE_PUBLIC_KEY } from '../utils/keys';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [addSale, { error }] = useMutation(ADD_SALE);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
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
      window.indexedDB.deleteDatabase('sole-reactions');
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
    addSale({
      variables: { shoes: shoeIds },
    });
  }

  return (
    <div className="cart container" style={{ minHeight: '70vh' }}>
      <div className="row">
        <div className="col-6"></div>
        <h2
          style={{
            fontFamily: 'Contrail One, cursive',
            fontSize: '3vh',
          }}
        >
          Your Shopping Cart
        </h2>
        {state.cart.length ? (
          <div
            style={{
              fontFamily: 'Comfortaa, cursive',
              fontSize: '2vh',
            }}
          >
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
            <div className="flex-row space-between">
              <strong>Total:</strong> ${calculateTotal()}*
              <p style={{ fontSize: '1vh' }}>
                *Taxes and shipping costs calculated at checkout.
              </p>
              {Auth.loggedIn() ? (
                <Button
                  color="green"
                  onClick={submitCheckout}
                  style={{
                    fontFamily: 'Comfortaa, cursive',
                  }}
                >
                  Proceed to Checkout
                </Button>
              ) : (
                <>
                  <Button
                    color="green"
                    onClick={submitCheckout}
                    style={{
                      fontFamily: 'Comfortaa, cursive',
                    }}
                  >
                    Guest Checkout
                  </Button>
                  <Link to="/login">
                    <Button
                      color="green"
                      onClick={submitCheckout}
                      style={{
                        fontFamily: 'Comfortaa, cursive',
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="m-5">
            <h3
              style={{
                fontFamily: 'Contrail One, cursive',
                fontSize: '3vh',
                color: 'red',
              }}
            >
              Uh Oh! Your Cart is Empty!
            </h3>
            <Button
              color="green"
              as={Link}
              to="/"
              style={{
                fontFamily: 'Comfortaa, cursive',
              }}
            >
              Start Shopping!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
