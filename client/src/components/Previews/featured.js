import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./style.css";
import gatoradeImg from "../../assets/images/shoes/Gatorade.png";
import PSNYImg from "../../assets/images/shoes/PSNY.png";
import uglyImg from "../../assets/images/shoes/Ugly.png";
import offwhiteImg from "../../assets/images/shoes/OffWhiteUNC.png";
import static700Img from "../../assets/images/shoes/Static700.png";

const SHOES = [
  {
    id: "626cbc4cf9f055c94838b830",
    img: gatoradeImg,
    alt: "Air Jordan 6 Gatorade shoe main color is green with orange on the bottom",
    name: "Air Jordan 6 Gatorade",
    price: "$425",
  },
  {
    id: "626cbc4cf9f055c94838b83a",
    img: PSNYImg,
    alt: "Air Jordan 12 x PSNY shoe all black/dark grey",
    name: "Air Jordan 12 x PSNY",
    price: "$450",
  },
  {
    id: "626cbc4cf9f055c94838b84a",
    img: uglyImg,
    alt: "Nike Dunk SB High x Concepts Ugly Christmas Sweater Grey shoe with snowmen and red flowers",
    name: "Nike Ugly Christmas Sweater",
    price: "$1400",
  },
  {
    id: "626cbc4cf9f055c94838b84e",
    img: static700Img,
    alt: "Adidas Yeezy Boost 700 V2 shoe sleek all white and light grey",
    name: "Adidas Yeezy Boost 700 V2",
    price: "$300",
  },
  {
    id: "626cbc4cf9f055c94838b835",
    img: offwhiteImg,
    alt: "Air Jordan 1 x Off White UNC shoe off white background with blue accents and orange thread",
    name: "Air Jordan 1 x Off White UNC",
    price: "$2500",
  },
];

const FeaturedPrev = () => {
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
        <Button as={Link} to="/featured" className="ui black button">
          Shop Featured Shoes
        </Button>
      </div>
    </div>
  );
};

export default FeaturedPrev;
