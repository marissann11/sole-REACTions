import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./style.css";
// to change the shoe image use the url from cloudinary and replace in IMG

const SHOES = [
  {
    id: "AQ0928-700",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538859/sole-intentions2/Animal_aqsngd.png",
    alt: "Nike Air Max 1 x Atmos Animal Pack shoe with cheetah and tiger print",
    name: "Nike Atmos Animal Pack",
    price: "$430",
  },
  {
    id: "918321-381",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538869/sole-intentions2/Campbell_af1fjc.png",
    alt: "Nike SB Dunk High x Thomas Campbell What The Dunk shoe with lots of multi colored prints",
    name: "Nike What The Dunk",
    price: "$775",
  },
  {
    id: "DH4692-100",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651545605/sole-intentions2/Drake_ggkuoo.png",
    alt: "Nike Hot Step Air Terra Drake NOCTA White sleek all white shoe",
    name: "Nike Air Terra Drake",
    price: "$300",
  },
  {
    id: "AT3057-100",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538865/sole-intentions2/ParraAM1_wbfbdc.png",
    alt: "Nike Air Max 1 x Parra shoe with multiple stripe and dot patterns",
    name: "Nike Air Max 1 x Parra",
    price: "$675",
  },
  {
    id: "532984-014",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538875/sole-intentions2/Trainer_eu8ftb.png",
    alt: "Nike Flyknit Trainer+ running shoe with bright multicolored weaving pattern",
    name: "Nike Flyknit Trainer",
    price: "$350",
  },
];

const NikePrev = () => {
  return (
    <div>
      <div className="container-fluid prevRow">
        <div className="ui horizontal list prevCont">
          {SHOES.map((shoe) => (
            <Link
              to={`/shoes/${shoe.id}`}
              className="item prevLink"
              key={shoe.id}
            >
              <img
                className="ui image shoePrev"
                src={shoe.img}
                alt={shoe.alt}
              />
              <div className="prevText">
                <strong>{shoe.name}</strong>
                <br />
                {shoe.price}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="prevText prevBtn">
        <Button as={Link} to="/nike" className="ui black button">
          Shop Nike
        </Button>
      </div>
    </div>
  );
};

export default NikePrev;
