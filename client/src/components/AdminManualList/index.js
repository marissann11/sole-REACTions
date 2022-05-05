import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SHOE } from '../../utils/mutations';
import { Button, Form, Message } from 'semantic-ui-react';

const AdminManualList = () => {
  const [formState, setFormState] = useState({});
  const [addShoe] = useMutation(ADD_SHOE);

  // all new releases are inserted with the coming soon image from cloudinary
  const handleShoeSubmit = async (event) => {
    event.preventDefault();
    const newShoeData = await addShoe({
      variables: {
        name: formState.name,
        description: formState.description,
        image:
          'https://res.cloudinary.com/gw-bootcamp/image/upload/v1651658547/sole-intentions3/Coming_Soon_uqhjj2.png',
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
      <h1 style={{ fontFamily: 'Contrail One, cursive' }}>Manual Upload</h1>
      <Form onSubmit={handleShoeSubmit}>
        <Form.Input
          placeholder="Name"
          name="name"
          type="name"
          id="name"
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
          onChange={handleChange}
        />
        <Form.Input
          placeholder="sku"
          name="sku"
          type="sku"
          id="sku"
          onChange={handleChange}
        />
        <Button type="submit">Post</Button>
      </Form>
    </div>
  );
};

export default AdminManualList;
