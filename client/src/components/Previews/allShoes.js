import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./style.css";
import belugaImg from "../../assets/images/shoes/Beluga2.png";
import CNYImg from "../../assets/images/shoes/CNY.png";
import seasaltImg from "../../assets/images/shoes/SeaSalt.png";
import spiridonImg from "../../assets/images/shoes/Spiridon.png";
import waverunnerImg from "../../assets/images/shoes/WaveRunner.png";

const SHOES = [
  {
    id: "626cbc4cf9f055c94838b824",
    img: belugaImg,
    alt: "Adidas Yeezy Boost 350 V2 Beluga 2.0 shoe main color grey with red writing",
    name: "Yeezy Boost Beluga 2.0",
    price: "$575",
  },
  {
    id: "626cbc4cf9f055c94838b82a",
    img: CNYImg,
    alt: "Air Jordan 12 Chinese New Year shoe is half black and half white with gold accents",
    name: "Air Jordan 12 Chinese New Year",
    price: "$300",
  },
  {
    id: "626cbc4cf9f055c94838b840",
    img: seasaltImg,
    alt: "New Balance 550 Sea Salt Varsity Gold shoe white main color with yellow/gold accents",
    name: "New Balance 550 Sea Salt",
    price: "$140",
  },
  {
    id: "626cbc4cf9f055c94838b843",
    img: spiridonImg,
    alt: "Nike x Stussy Air Zoom Spiridon Fossil",
    name: "Nike x Stussy Spiridon Fossil",
    price: "$565",
  },
  {
    id: "626cbc4cf9f055c94838b84e",
    img: waverunnerImg,
    alt: "Adidas Yeezy Boost 700 Wave Runner shoe main color white with black accents",
    name: "Yeezy Boost 700 Wave Runner",
    price: "$400",
  },
];

const AllPrev = () => {
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
        <Button as={Link} to="/shoes" className="ui black button">
          Shop All Shoes
        </Button>
      </div>
    </div>
  );
};

export default AllPrev;
