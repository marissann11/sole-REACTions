import React from "react";
import { Link } from "react-router-dom";
import "../Previews/style.css";

function ShoeItem(shoe) {
  const { image, name, _id, price } = shoe;

  return (
    <div className="ui horizontal list allCont m-5 row justify-content-start">
      <Link to={`/shoes/${_id}`} className="item prevLink" key={_id}>
        <div className="shoeDiv">
          <img
            className="ui image shoeAll"
            src={process.env.PUBLIC_URL + `/images/${image}`}
            alt={name}
          />
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
