import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./style.css";
import fusionImg from "../../assets/images/shoes/Fusion.png";
import latochiImg from "../../assets/images/shoes/LaToChi.png";
import royalImg from "../../assets/images/shoes/Royal.png";
import rotyImg from "../../assets/images/shoes/ROTY.png";
import sbbImg from "../../assets/images/shoes/SBB.png";

const SHOES = [
  {
    id: "555088-603",
    img: fusionImg,
    alt: "Air Jordan 1 Light Fusion Red shoe is white base with red accents and gold swoosh",
    name: "Air Jordan Light Fusion Red",
    price: "$160",
  },
  {
    id: "CD6578-507",
    img: latochiImg,
    alt: "Air Jordan 1 SB LA to Chicago shoe is white base with navy accents and yellow swoosh",
    name: "Air Jordan SB LA to Chicago",
    price: "$590",
  },
  {
    id: "555088-007",
    img: royalImg,
    alt: "Air Jordan 1 Royal shoe is black base with royal blue accents and swoosh",
    name: "Air Jordan Royal",
    price: "$475",
  },
  {
    id: "555088-700",
    img: rotyImg,
    alt: "Air Jordan 1 Rookie of the Year shoe is white base with brown accents and black swoosh",
    name: "Air Jordan Rookie of the Year",
    price: "$665",
  },
  {
    id: "555088-005",
    img: sbbImg,
    alt: "Air Jordan 1 Shattered Backboard shoe is white base with orange accents and black swoosh",
    name: "Air Jordan Shattered Backboard",
    price: "$350",
  },
];

const JordanPrev = () => {
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
        <Button as={Link} to="/jordan" className="ui black button">
          Shop Air Jordan
        </Button>
      </div>
    </div>
  );
};

export default JordanPrev;
