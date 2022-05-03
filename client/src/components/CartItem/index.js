import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { List, Image, Icon } from "semantic-ui-react";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      sku: item.sku,
    });
    idbPromise("cart", "delete", { ...item });
  };
  const onChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        sku: item.sku,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        sku: item.sku,
        purchaseQty: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQty: parseInt(value) });
    }
  };

  return (
    <div className="container">
      <List divided verticalAlign="middle">
        <List.Item>
          <div className="row m-4 border align-items-center justify-content-evenly">
            <div className="col-3">
              <Image
                size="small"
                src={item.image}
                alt={item.name}
                className="me-5"
              />
            </div>
            <div className="col-8">
              <List.Content>
                <div className="row">
                  <div className="col">
                    <List.Header as={Link} to={`/shoes/${item.sku}`}>
                      {item.name}
                    </List.Header>
                    <List.Description>${item.price}</List.Description>
                  </div>
                  <div className="col">
                    <span>Qty:</span>
                    <input
                      type="number"
                      placeholder="1"
                      value={item.purchaseQty}
                      onChange={onChange}
                    />
                  </div>
                  <div
                    className="col"
                    aria-label="trash"
                    onClick={() => removeFromCart(item)}
                  >
                    <Icon link color="red" name="trash alternate outline" />
                  </div>{" "}
                </div>
              </List.Content>
            </div>
          </div>
        </List.Item>
      </List>
    </div>
  );
};

export default CartItem;
