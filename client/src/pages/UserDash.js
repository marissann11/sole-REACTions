import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from '../utils/keys';
import { QUERY_PORTAL } from '../utils/queries';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const UserDash = () => {
  const [getPortal, { data }] = useLazyQuery(QUERY_PORTAL);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        console.log(res);
        // res.redirectToCheckout({
        //   session: data.subPortal.session.return_url,
        // });
        // res.redirect(data.getPortal.session.url);
      });
    }
  }, [data]);

  const handleSubmit = () => {
    getPortal();
  };

  return (
    <div>
      UserDash
      <Button onClick={handleSubmit}>Manage Subscription</Button>
    </div>
  );
};

export default UserDash;
