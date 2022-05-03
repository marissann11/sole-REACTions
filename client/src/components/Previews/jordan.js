import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./style.css";


const SHOES = [
  {
    id: "555088-603",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538859/sole-intentions2/Fusion_frcdbn.png",
    alt: "Air Jordan 1 Light Fusion Red shoe is white base with red accents and gold swoosh",
    name: "Air Jordan Light Fusion Red",
    price: "$160",
  },
  {
    id: "CD6578-507",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538862/sole-intentions2/LaToChi_abx05o.png",
    alt: "Air Jordan 1 SB LA to Chicago shoe is white base with navy accents and yellow swoosh",
    name: "Air Jordan SB LA to Chicago",
    price: "$590",
  },
  {
    id: "555088-007",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538870/sole-intentions2/Royal_idzo22.png",
    alt: "Air Jordan 1 Royal shoe is black base with royal blue accents and swoosh",
    name: "Air Jordan Royal",
    price: "$475",
  },
  {
    id: "555088-700",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538870/sole-intentions2/ROTY_creeb6.png",
    alt: "Air Jordan 1 Rookie of the Year shoe is white base with brown accents and black swoosh",
    name: "Air Jordan Rookie of the Year",
    price: "$665",
  },
  {
    id: "555088-005",
    img: "https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538871/sole-intentions2/SBB_tqol2a.png",
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
