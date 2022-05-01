import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./style.css";
import animalImg from "../../assets/images/shoes/Animal.png";
import campbellImg from "../../assets/images/shoes/Campbell.png";
import drakeImg from "../../assets/images/shoes/Drake.png";
import parraImg from "../../assets/images/shoes/ParraAM1.png";
import trainerImg from "../../assets/images/shoes/Trainer.png";

const SHOES = [
  {
    id: "626cbc4cf9f055c94838b822",
    img: animalImg,
    alt: "Nike Air Max 1 x Atmos Animal Pack shoe with cheetah and tiger print",
    name: "Nike Air Max 1 x Atmos Animal Pack",
    price: "$430",
  },
  {
    id: "626cbc4cf9f055c94838b827",
    img: campbellImg,
    alt: "Nike SB Dunk High x Thomas Campbell What The Dunk shoe with lots of multi colored prints",
    name: "Nike SB Dunk What The Dunk",
    price: "$775",
  },
  {
    id: "626cbc4cf9f055c94838b82d",
    img: drakeImg,
    alt: "Nike Hot Step Air Terra Drake NOCTA White sleek all white shoe",
    name: "Nike Hot Step Air Terra Drake NOCTA",
    price: "$300",
  },
  {
    id: "626cbc4cf9f055c94838b837",
    img: parraImg,
    alt: "Nike Air Max 1 x Parra shoe with multiple stripe and dot patterns",
    name: "Nike Air Max 1 x Parra",
    price: "$675",
  },
  {
    id: "626cbc4cf9f055c94838b848",
    img: trainerImg,
    alt: "Nike Flyknit Trainer+ running shoe with bright multicolored weaving pattern",
    name: "Nike Flyknit Trainer+",
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
