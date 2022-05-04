import React, { useEffect } from 'react';

function SuccessSub() {
  useEffect(() => {
    async function successSubPage() {
      setTimeout(() => {
        window.location.assign('/');
      }, 5000);
    }

    successSubPage();
  });

  return (
    <div>
      <div
        className="m-5 p-5 text-center"
        style={{
          fontFamily: 'Contrail One, cursive',
          fontSize: '6vh',
          backgroundColor: 'lightgrey',
        }}
      >
        <h1>Success!</h1>
        <h2>
          Thank you for your Subscription to be kept up to date on all new
          releases
          <br />
          and welcome to the fam!
        </h2>
        <h2>You will now be redirected to the home page</h2>{' '}
      </div>
    </div>
  );
}

export default SuccessSub;
