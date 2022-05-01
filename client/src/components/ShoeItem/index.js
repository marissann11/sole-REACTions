import React from "react";
import { Link } from "react-router-dom";

function ShoeItem(shoe) {
  const { image, name, _id, price } = shoe;

  return (
    <div className="ui horizontal list prevCont m-5 row justify-content-start">
      <Link to={`/shoes/${_id}`} className="item prevLink" key={_id}>
        <img
          className="ui image shoePrev"
          src={process.env.PUBLIC_URL + `/images/${image}`}
          alt={name}
        />
        <div className="prevText">
          <strong>{name}</strong>
          <br />${price}
        </div>
      </Link>
    </div>
  );
}

export default ShoeItem;
