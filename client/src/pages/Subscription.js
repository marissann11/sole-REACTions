import React, { useEffect } from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { QUERY_SUBSCRIPTION } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
// import { STRIPE_PUBLIC_KEY } from '../utils/keys';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const Subscription = () => {
  const [getSubscription, { data }] = useLazyQuery(QUERY_SUBSCRIPTION);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.subscription.session });
      });
    }
  }, [data]);

  const handleSubmit = () => {
    getSubscription();
  };

  return (
    <div className="m-5 p-5 rounded" style={{ backgroundColor: 'grey' }}>
      <div className="row d-flex justify-content-between">
        <Grid stackable columns={2}>
          <Grid.Column width={9}>
            <div className="my-5">
              <h3
                style={{
                  fontFamily: 'Contrail One, cursive',
                  fontSize: '6vh',
                  color: 'white',
                }}
              >
                Join the Sneakies Community!
              </h3>
              <p
                style={{
                  fontFamily: 'Comfortaa, cursive',
                  fontSize: '2.5vh',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                <br />
                Never miss a shoe release again! <br /> <br />
                Sole Intentions is now offering a monthly subscription that
                allows for exclusive access to all of our new releases. You'll
                always be the first to know and will never have to feel the
                frustration of seeing 'sold out' again.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="m-5 p-5 bg-dark rounded bg-opacity-50">
              <h3
                style={{
                  fontFamily: 'Contrail One, cursive',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                $10.00/month
              </h3>
              <p
                style={{
                  fontFamily: 'Comfortaa, cursive',
                  fontSize: '2vh',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <br />
                <span>
                  <Icon color="green" name="checkmark" />
                </span>
                Exclusive first-to-know access
              </p>
              <p
                style={{
                  fontFamily: 'Comfortaa, cursive',
                  fontSize: '2vh',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <span>
                  <Icon color="green" name="checkmark" />
                </span>
                Stay up-to-date with weekly newsletter
              </p>
              <p
                style={{
                  fontFamily: 'Comfortaa, cursive',
                  fontSize: '2vh',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <span>
                  <Icon color="green" name="checkmark" />
                </span>
                Free cancellation - anytime!
              </p>
              <div style={{ textAlign: 'center' }}>
                <br />
                <Button onClick={handleSubmit}>SUBSCRIBE NOW!</Button>
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Subscription;
