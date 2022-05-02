import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SHOE } from '../../utils/mutations';
import { Button, Form } from 'semantic-ui-react';
import comingsoon from '../../assets/images/shoes/comingsoon.png';

//need to correct this image path as well

const AdminManualList = () => {
  const [formState, setFormState] = useState({});
  const [addShoe] = useMutation(ADD_SHOE);

  const handleShoeSubmit = async (event) => {
    event.preventDefault();
    const newShoeData = await addShoe({
      variables: {
        name: formState.name,
        description: formState.description,
        image: comingsoon,
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
      <h1>Manually Insert your Shoesies</h1>
      <Form onSubmit={handleShoeSubmit}>
        <Form.Input
          placeholder="name"
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
          placeholder="sku"
          name="sku"
          type="sku"
          id="sku"
          onChange={handleChange}
        />

        <Button type="submit">List</Button>
      </Form>
    </div>
  );
};

export default AdminManualList;
