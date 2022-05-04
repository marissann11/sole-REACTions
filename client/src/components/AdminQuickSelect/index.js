import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SHOE } from '../../utils/mutations';
import { Button, Form } from 'semantic-ui-react';

const SHOES = [
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651650243/sole-intentions3/Untitled_design_6_uwpr8b.png',
    alt: 'Nike Air Force 1 Low',
    name: 'Nike Air Force 1 Low',
    sku: '5432-1243',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538877/sole-intentions2/Ugly_nx7dg3.png',
    alt: 'This is a test',
    name: 'Test Shoe Two',
    sku: '5472-1243',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538877/sole-intentions2/Ugly_nx7dg3.png',
    alt: 'This is a test',
    name: 'Test Shoe Three',
    sku: '5432-1943',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538877/sole-intentions2/Ugly_nx7dg3.png',
    alt: 'This is a test',
    name: 'Test Shoe Four',
    sku: '5432-63',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651538877/sole-intentions2/Ugly_nx7dg3.png',
    alt: 'This is a test',
    name: 'Test Shoe Five',
    sku: '132-1243',
  },
];

const AdminQuickSelect = () => {
  const [formState, setFormState] = useState({});
  const [currentShoe, setCurrentShoe] = useState({});
  const [addShoe] = useMutation(ADD_SHOE);

  const submitShoe = async (event) => {
    event.preventDefault();
    const shoeData = await addShoe({
      variables: {
        name: currentShoe.name,
        description: formState.description,
        image: currentShoe.image,
        price: parseInt(formState.price),
        brand: formState.brand,
        year: formState.year,
        sku: currentShoe.sku,
      },
    });
  };

  const saveShoe = (shoe) => {
    setCurrentShoe({
      name: shoe.name,
      image: shoe.img,
      sku: shoe.sku,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Your popular shortcuts</h1>
      <div className="container-fluid prevRow">
        <div className="ui horizontal list prevCont">
          {SHOES.map((shoe) => (
            <>
              <div key={shoe.sku}>
                <img
                  className="ui image shoePrev"
                  src={shoe.img}
                  alt={shoe.alt}
                />
                <div className="prevText">
                  <strong>{shoe.name}</strong>
                  <br />
                </div>
                <Form>
                  <Form.Input
                    placeholder={shoe.name}
                    name="Name"
                    type="name"
                    id="name"
                    value={shoe.name}
                    onChange={handleChange}
                  />
                  <Form.Input
                    placeholder="description"
                    name="description"
                    type="description"
                    id="description"
                    onChange={handleChange}
                  />
                  <Form.Input
                    placeholder="price"
                    name="price"
                    type="price"
                    id="price"
                    onChange={handleChange}
                  />
                  <Form.Input
                    placeholder="Brand"
                    name="brand"
                    type="brand"
                    id="brand"
                    onChange={handleChange}
                  />
                  <Form.Input
                    placeholder="Year"
                    name="year"
                    type="year"
                    id="year"
                    onClick={() => saveShoe(shoe)}
                    onChange={handleChange}
                  />
                </Form>
                <Button onClick={submitShoe}>Add Shoe</Button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminQuickSelect;
