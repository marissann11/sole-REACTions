import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './style.css';

const SHOES = [
  {
    sku: 'AH2203',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647514/sole-intentions3/Beluga2_iusasz_hpoufx.png',
    alt: 'Adidas Yeezy Boost 350 V2 Beluga 2.0 shoe main color grey with red writing',
    name: 'Yeezy Boost Beluga 2.0',
    price: '$575',
  },
  {
    sku: '881427-122',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647539/sole-intentions3/CNY_jgvujw_jdl3aj.png',
    alt: 'Air Jordan 12 Chinese New Year shoe is half black and half white with gold accents',
    name: 'Air Jordan 12 Chinese New Year',
    price: '$300',
  },
  {
    sku: 'BB550LA1',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647560/sole-intentions3/SeaSalt_xxcqlk_hbw43i.png',
    alt: 'New Balance 550 Sea Salt Varsity Gold shoe white main color with yellow/gold accents',
    name: 'New Balance 550 Sea Salt',
    price: '$140',
  },
  {
    sku: 'CQ5486-200',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647560/sole-intentions3/Spiridon_uoqxgp_pfrqlz.png',
    alt: 'Nike x Stussy Air Zoom Spiridon Fossil',
    name: 'Nike x Stussy Spiridon Fossil',
    price: '$565',
  },
  {
    sku: 'B75571',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647561/sole-intentions3/WaveRunner_enizdb_oletaz.png',
    alt: 'Adidas Yeezy Boost 700 Wave Runner shoe main color white with black accents',
    name: 'Yeezy Boost 700 Wave Runner',
    price: '$400',
  },
];

const AllPrev = () => {
  return (
    <div>
      <div className="container-fluid prevRow">
        <div className="ui horizontal list prevCont">
          {SHOES.map((shoe) => (
            <Link
              to={`/shoes/${shoe.sku}`}
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
