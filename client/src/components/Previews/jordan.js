import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './style.css';

const SHOES = [
  {
    sku: '555088-603',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647550/sole-intentions3/Fusion_frcdbn_c4ua2o.png',
    alt: 'Air Jordan 1 Light Fusion Red shoe is white base with red accents and gold swoosh',
    name: 'Air Jordan Light Fusion Red',
    price: '$160',
  },
  {
    sku: 'CD6578-507',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647550/sole-intentions3/LaToChi_abx05o_gosmgm.png',
    alt: 'Air Jordan 1 SB LA to Chicago shoe is white base with navy accents and yellow swoosh',
    name: 'Air Jordan SB LA to Chicago',
    price: '$590',
  },
  {
    sku: '555088-007',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647560/sole-intentions3/Royal_idzo22_vzcsvx.png',
    alt: 'Air Jordan 1 Royal shoe is black base with royal blue accents and swoosh',
    name: 'Air Jordan Royal',
    price: '$475',
  },
  {
    sku: '555088-700',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647551/sole-intentions3/ROTY_creeb6_ma8azt.png',
    alt: 'Air Jordan 1 Rookie of the Year shoe is white base with brown accents and black swoosh',
    name: 'Air Jordan Rookie of the Year',
    price: '$665',
  },
  {
    sku: '555088-005',
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651647560/sole-intentions3/SBB_tqol2a_tnh5hd.png',
    alt: 'Air Jordan 1 Shattered Backboard shoe is white base with orange accents and black swoosh',
    name: 'Air Jordan Shattered Backboard',
    price: '$1600',
  },
];

const JordanPrev = () => {
  return (
    <div>
      <div className="container-fluid prevRow">
        <div className="ui horizontal list prevCont">
          {SHOES.map((shoe) => (
            <Link
              to={`/shoes/${shoe.sku}`}
              className="item prevLink"
              key={shoe.sku}
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
