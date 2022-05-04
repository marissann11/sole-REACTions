import React from "react";
import { Link } from "react-router-dom";
import "../Previews/style.css";

function ShoeItem(shoe) {
  const { image, name, sku, _id, price } = shoe;
  console.log(image);

  return (
    <div className="ui horizontal list allCont m-5 row justify-content-start">
      <Link to={`/shoes/${sku}`} className="item prevLink" key={_id}>
        <div className="shoeDiv">
          <img className="ui image shoeAll" src={shoe.image} alt={name} />
        </div>
        <div className="prevText">
          <strong>{name}</strong>
          <br />${price}
        </div>
      </Link>
    </div>
  );
}

export default ShoeItem;
