import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { Item } from "semantic-ui-react";
import {
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_SHOES,
} from "../utils/actions";
import { QUERY_ALL_SHOES } from "../utils/queries";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { sku } = useParams();
  const [currentShoe, setCurrentShoe] = useState({});
  const { loading, data } = useQuery(QUERY_ALL_SHOES);
  const { shoes, cart } = state;

  useEffect(() => {
    if (shoes.length) {
      setCurrentShoe(shoes.find((shoe) => shoe.sku === sku));
    } else if (data) {
      dispatch({
        type: UPDATE_SHOES,
        shoes: data.shoes,
      });
    }
  }, [shoes, data, loading, dispatch, sku]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem.sku === sku);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        sku: sku,
        purchaseQty: parseInt(itemInCart.purchaseQty) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        shoe: { ...currentShoe, purchaseQty: 1 },
      });
    }
  };

  return (
    <>
      {currentShoe ? (
        <div className="container">
          <Item>
            <div className="row">
              <div className="col-5">
                <Item.Image
                  size="big"
                  src={process.env.PUBLIC_URL + `/images/${currentShoe.image}`}
                  alt={currentShoe.name}
                />
              </div>
              <div className="col-5 m-5">
                <Item.Content>
                  <Item.Header as="a">{currentShoe.name}</Item.Header>
                  <Item.Description>
                    <p>{currentShoe.description}</p>
                    <p>
                      <strong>Price:</strong>${currentShoe.price}{" "}
                      <button onClick={addToCart}>Add to cart</button>{" "}
                    </p>
                  </Item.Description>
                </Item.Content>
              </div>
            </div>
          </Item>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
