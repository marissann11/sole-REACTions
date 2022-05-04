import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './style.css';

const SHOES = [
  {
    sku: 'AJ5986-335',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647550/sole-intentions3/Gatorade_cz0d7u_sm2kd3.png',
    alt: 'Air Jordan 6 Gatorade shoe main color is green with orange on the bottom',
    name: 'Air Jordan 6 Gatorade',
    price: '$425',
  },
  {
    sku: '130690-003',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647551/sole-intentions3/PSNY_i5xger_n4h04i.png',
    alt: 'Air Jordan 12 x PSNY shoe all black/dark grey',
    name: 'Air Jordan 12 x PSNY',
    price: '$450',
  },
  {
    sku: '635525-036',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647561/sole-intentions3/Ugly_nx7dg3_ofdgh6.png',
    alt: 'Nike Dunk SB High x Concepts Ugly Christmas Sweater Grey shoe with snowmen and red flowers',
    name: 'Nike Ugly Christmas Sweater',
    price: '$1400',
  },
  {
    sku: 'EF2829',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647560/sole-intentions3/Static700_e3s5hk_ddr4um.png',
    alt: 'Adidas Yeezy Boost 700 V2 shoe sleek all white and light grey',
    name: 'Adidas Yeezy Boost 700 V2',
    price: '$300',
  },
  {
    sku: 'AQ0818-148',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647550/sole-intentions3/OffWhiteUNC_s9jtxl_jbdguu.png',
    alt: 'Air Jordan 1 x Off White UNC shoe off white background with blue accents and orange thread',
    name: 'Air Jordan 1 x Off White UNC',
    price: '$2500',
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
