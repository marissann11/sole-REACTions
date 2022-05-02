import React, { useState } from 'react';
import uglyImg from '../../assets/images/shoes/Ugly.png';
import { useMutation } from '@apollo/client';
import { ADD_SHOE } from '../../utils/mutations';
import { Button, Form } from 'semantic-ui-react';

const SHOES = [
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe One',
    price: 5,
    sku: '12345',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Two',
    price: 5,
    sku: '23456',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Three',
    price: 5,
    sku: '34567',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Four',
    price: 5,
    sku: '45678',
  },
  {
    img: uglyImg,
    alt: 'This is a test',
    name: 'Test Shoe Five',
    price: 5,
    sku: '56789',
  },
];

const AdminQuickSelect = () => {
  const [formState, setFormState] = useState({});
  const [addShoe] = useMutation(ADD_SHOE);

  const submitShoe = async (event) => {
    event.preventDefault();
    console.log(formState);
    const shoeData = await addShoe({
      variables: {
        name: formState.name,
        description: formState.description,
        image: uglyImg,
        price: formState.price,
        brand: formState.brand,
        year: formState.year,
        sku: formState.sku,
      },
    });
    console.log(shoeData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
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
                  {shoe.price}
                </div>
                <Form>
                  <Form.Input
                    placeholder={shoe.name}
                    name="name"
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
                    placeholder={shoe.price}
                    name={shoe.price}
                    type="price"
                    id="price"
                    value={shoe.price}
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
                    value={shoe.sku}
                    onChange={handleChange}
                  />
                </Form>
                <Button onClick={submitShoe}>Add Shoe{shoe.name}</Button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminQuickSelect;
