import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SHOES } from '../utils/queries';
import ShoeItem from '../components/ShoeItem';

const Nike = () => {
  const { loading, data } = useQuery(QUERY_ALL_SHOES, {
    variables: { filters: { brand: 'Nike' } },
  });

  if (loading) {
    return <h3>loading products</h3>;
  }

  if (data) {
    return (
      <div className="container-fluid prevRow ms-4">
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

export default Nike;
