import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SHOES } from '../utils/queries';
import ShoeItem from '../components/ShoeItem';

const Featured = () => {
  const { loading, data } = useQuery(QUERY_ALL_SHOES, {
    variables: { filters: { featured: 'true' } },
  });
  // above is added boolean to allow us to hardcord our featured shoes filter here

  if (loading) {
    return <h3>loading products</h3>;
  }

  if (data) {
    return (
      <div>
        <div
          className="m-5 p-5 text-center"
          style={{
            fontFamily: 'Contrail One, cursive',
            fontSize: '6vh',
            backgroundColor: 'lightgrey',
          }}
        >
          Featured Sneakers
        </div>
        <div>
          {data.shoes.map((shoe) => (
            <ShoeItem
              key={shoe.sku}
              sku={shoe.sku}
              image={shoe.image}
              name={shoe.name}
              price={shoe.price}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Featured;
