import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { Button, Item, Grid, Segment } from "semantic-ui-react";
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
              <div className="col-6 my-5 me-5">
                <Item.Image
                  size="big"
                  src={process.env.PUBLIC_URL + `/images/${currentShoe.image}`}
                  alt={currentShoe.name}
                />
                <h3
                  style={{
                    fontFamily: "Contrail One, cursive",
                    fontSize: "3vh",
                  }}
                >
                  ABOUT THIS SHOE:
                </h3>
                <p
                  style={{
                    fontFamily: "Comfortaa, cursive",
                    fontSize: "2vh",
                  }}
                >
                  {currentShoe.description}
                </p>
              </div>
              <div className="col-4 m-5">
                <Item.Content>
                  <Item.Header
                    style={{
                      fontFamily: "Contrail One, cursive",
                      fontSize: "3vh",
                    }}
                  >
                    <strong>{currentShoe.name}</strong>
                  </Item.Header>
                  <Item.Description>
                    <p
                      style={{
                        fontFamily: "Comfortaa, cursive",
                        fontSize: "2vh",
                      }}
                    >
                      ${currentShoe.price}
                    </p>
                  </Item.Description>
                </Item.Content>
                <Button onClick={addToCart}>Add to cart</Button>{" "}
              </div>
            </div>
          </Item>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
