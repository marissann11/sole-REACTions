import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Subscription = () => {
  return (
    <div className="m-5 p-5 rounded" style={{ backgroundColor: "grey" }}>
      <div className="row d-flex justify-content-between">
        <div className="col-7 my-5 py-5 rounded">
          <h3
            style={{
              fontFamily: "Contrail One, cursive",
              fontSize: "6vh",
              color: "white",
            }}
          >
            Join the Sneakies Community!
          </h3>
          <p
            style={{
              fontFamily: "Comfortaa, cursive",
              fontSize: "2.5vh",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <br />
            Never miss a shoe release again! <br /> <br />
            Sole Intentions is now offering a monthly subscription that allows
            for exclusive access to all of our new releases. You'll always be
            the first to know and will never have to feel the frustration of
            seeing 'sold out' again.
          </p>
        </div>
        <div className="col-5 my-5 py-5 bg-dark rounded bg-opacity-50">
          <h3
            style={{
              fontFamily: "Contrail One, cursive",
              color: "white",
              textAlign: "center",
            }}
          >
            $15.00/month
          </h3>
          <p
            style={{
              fontFamily: "Comfortaa, cursive",
              fontSize: "2vh",
              color: "white",
              textAlign: "center",
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
              fontFamily: "Comfortaa, cursive",
              fontSize: "2vh",
              color: "white",
              textAlign: "center",
            }}
          >
            <span>
              <Icon color="green" name="checkmark" />
            </span>
            Stay up-to-date with weekly newsletter
          </p>
          <p
            style={{
              fontFamily: "Comfortaa, cursive",
              fontSize: "2vh",
              color: "white",
              textAlign: "center",
            }}
          >
            <span>
              <Icon color="green" name="checkmark" />
            </span>
            Free cancellation - anytime!
          </p>
          <div style={{ textAlign: "center" }}>
            <br />
            <Button>SUBSCRIBE NOW!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
