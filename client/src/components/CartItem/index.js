import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
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
    <List divided verticalAlign="middle">
      <List.Item>
        <Image size="small" src={`/images/${item.image}`} alt={item.name} />
        <List.Content>
          <List.Header as={Link} to={`/shoes/${item.sku}`}>
            {item.name}
          </List.Header>
          <List.Description>${item.price}</List.Description>
          <div>
            <span>Qty:</span>
            <input
              type="number"
              placeholder="1"
              value={item.purchaseQty}
              onChange={onChange}
            />
            <span
              role="img"
              aria-label="trash"
              onClick={() => removeFromCart(item)}
            >
              🗑️
            </span>{" "}
          </div>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default CartItem;
