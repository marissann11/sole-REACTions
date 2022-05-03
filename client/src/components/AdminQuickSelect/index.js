import React, { useState } from 'react';
import uglyImg from '../../assets/images/shoes/Ugly.png';
import { useMutation } from '@apollo/client';
import { ADD_SHOE } from '../../utils/mutations';
import { Button, Form } from 'semantic-ui-react';

// image path has to be fixed (and actual shortcut images added)

const SHOES = [
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe One',
    sku: '12345',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Two',
    sku: '23456',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Three',
    sku: '34567',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Four',
    sku: '45678',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Five',
    sku: '56789',
  },
];

const AdminQuickSelect = () => {
  const [formState, setFormState] = useState({});
  const [addShoe] = useMutation(ADD_SHOE);

  const submitShoe = async (event) => {
    event.preventDefault();
    const shoeData = await addShoe({
      variables: {
        name: formState.name,
        description: formState.description,
        image: uglyImg,
        price: parseInt(formState.price),
        brand: formState.brand,
        year: formState.year,
        sku: formState.sku,
      },
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
                    name="name"
                    type="name"
                    id="name"
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
                    placeholder="brand"
                    name="brand"
                    type="brand"
                    id="brand"
                    onChange={handleChange}
                  />
                  <Form.Input
                    placeholder="year"
                    name="year"
                    type="year"
                    id="year"
                    onChange={handleChange}
                  />
                  <Form.Input
                    placeholder={shoe.sku}
                    name="sku"
                    type="sku"
                    id="sku"
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