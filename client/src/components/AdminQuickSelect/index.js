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
    sid: '8765432345',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651678026/sole-intentions3/nmd_bdmcgg.png',
    alt: 'Adidas NMD R1',
    name: 'Adidas NMD R1',
    sku: '5472-1243',
    sid: '81234564',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651682621/sole-intentions3/vapormax_gd5trc.png',
    alt: 'Nike Air VaporMax Plus',
    name: 'Nike Air VaporMax Plus',
    sku: '5432-1943',
    sid: '12357645435',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651683280/sole-intentions3/newbal_j1n9a2.png',
    alt: 'New Balance x JJJound 990v4 sneaker',
    name: 'New Balance x JJJound 990v4 sneaker',
    sku: '5432-63',
    sid: '123132345',
  },
  {
    img: 'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651683409/sole-intentions3/adid_v4psvz.png',
    alt: 'Adidas Forum 84 ADV low sneaker',
    name: 'Adidas Forum 84 ADV low sneaker',
    sku: '132-1243',
    sid: '7686445',
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
    console.log(event.target);
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="ms-5 mb-3">
      <h1 style={{ fontFamily: 'Contrail One, cursive' }}>
        Restock on one of your most popular:
      </h1>
      <div className="container">
        <div className="row">
          {SHOES.map((shoe) => (
            <div key={shoe.sid} className="col-4">
              <img
                className="ui image shoePrev"
                src={shoe.img}
                alt={shoe.alt}
              />
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
                  placeholder="Description"
                  name="description"
                  type="description"
                  id="description"
                  onChange={handleChange}
                />
                <Form.Input
                  placeholder="Price"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminQuickSelect;
