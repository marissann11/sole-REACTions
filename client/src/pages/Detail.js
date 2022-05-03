import React, { useEffect, useState } from 'react';
import SizeChart from '../components/SizeChart';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { idbPromise } from '../utils/helpers';
import { Button, Item } from 'semantic-ui-react';
import {
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_SHOES,
} from '../utils/actions';
import { QUERY_ALL_SHOES } from '../utils/queries';

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
      data.shoes.forEach((shoe) => {
        idbPromise('shoes', 'put', shoe);
      });
    } else if (!loading) {
      idbPromise('shoes', 'get').then((indexedShoes) => {
        dispatch({
          type: UPDATE_SHOES,
          shoes: indexedShoes,
        });
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
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQty: parseInt(itemInCart.purchaseQty) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        shoe: { ...currentShoe, purchaseQty: 1 },
      });
      idbPromise('cart', 'put', { ...currentShoe, purchaseQty: 1 });
    }
  };

  return (
    <>
      {currentShoe ? (
        <div className="container d-flex">
          <Item>
            <div className="row justify-content-between">
              <div className="col-6 my-5 me-5">
                <Item.Image
                  size="big"
                  src={currentShoe.image}
                  alt={currentShoe.name}
                />
                <h3
                  style={{
                    fontFamily: 'Contrail One, cursive',
                    fontSize: '3vh',
                  }}
                >
                  ABOUT THIS SHOE:
                </h3>
                <div
                  style={{
                    fontFamily: 'Comfortaa, cursive',
                    fontSize: '2vh',
                  }}
                >
                  <p>{currentShoe.description}</p>
                  <p>
                    <strong>Release Year:</strong> {currentShoe.year}
                  </p>

                  <p>
                    <strong>SKU:</strong> {currentShoe.sku}
                  </p>
                </div>
              </div>
              <div className="col-4 m-5">
                <Item.Content>
                  <Item.Header
                    style={{
                      fontFamily: 'Contrail One, cursive',
                      fontSize: '3vh',
                    }}
                  >
                    <strong>{currentShoe.name}</strong>
                  </Item.Header>
                  <Item.Description>
                    <p
                      style={{
                        fontFamily: 'Comfortaa, cursive',
                        fontSize: '3vh',
                      }}
                    >
                      ${currentShoe.price}
                      <br /> <br />
                    </p>
                  </Item.Description>
                </Item.Content>
                <h4
                  style={{
                    fontFamily: 'Comfortaa, cursive',
                    fontSize: '2vh',
                  }}
                >
                  Size (US Mens):
                </h4>
                <SizeChart />
                <Button
                  color="green"
                  onClick={addToCart}
                  as={Link}
                  to="/cart"
                  className="mt-4"
                  style={{
                    fontFamily: 'Comfortaa, cursive',
                  }}
                >
                  Add to Cart
                </Button>{' '}
              </div>
            </div>
          </Item>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
