import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Subscription = () => {
  return (
    <div className="container m-5 p-5">
      <div className="row d-flex flex-wrap justify-content-between">
        <div className="col-6 my-5 py-5 bg-dark rounded bg-opacity-25">
          <h3 style={{ fontFamily: "Contrail One, cursive", fontSize: "6vh" }}>
            Join the Sneakies Community!
          </h3>
          <p style={{ fontFamily: "Comfortaa, cursive", fontSize: "2.5vh" }}>
            <br />
            Never miss a shoe release again! <br /> <br />
            Sole Intentions is now offering a monthly subscription that allows
            for exclusive access to all of our new releases. You'll always be
            the first to know and never have to feel the frustration of seeing
            'sold out' again.
          </p>
        </div>
        <div className="col-4 my-5 py-5 bg-dark rounded bg-opacity-25">
          <h3 style={{ fontFamily: "Contrail One, cursive" }}>$15.00/month</h3>
          <p style={{ fontFamily: "Comfortaa, cursive", fontSize: "2vh" }}>
            <span>
              <Icon color="green" name="checkmark" />
            </span>
            Exclusive first-to-know access
          </p>
          <p style={{ fontFamily: "Comfortaa, cursive", fontSize: "2vh" }}>
            <span>
              <Icon color="green" name="checkmark" />
            </span>
            Stay up-to-date with weekly newsletter
          </p>
          <p style={{ fontFamily: "Comfortaa, cursive", fontSize: "2vh" }}>
            <span>
              <Icon color="green" name="checkmark" />
            </span>
            Free cancellation - anytime!
          </p>
          <Button>SUBSCRIBE NOW!</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
