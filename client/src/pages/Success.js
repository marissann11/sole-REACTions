import React, { useEffect } from "react";

function Success() {
  useEffect(() => {
    async function successPage() {
      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    successPage();
  });

  return (
    <div>
      <div
        className="m-5 p-5 text-center"
        style={{
          fontFamily: "Contrail One, cursive",
          fontSize: "6vh",
          backgroundColor: "lightgrey",
        }}
      >
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>{" "}
      </div>
    </div>
  );
}

export default Success;
