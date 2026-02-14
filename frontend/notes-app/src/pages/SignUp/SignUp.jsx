import React from "react";

const SignUp = () => {
  const
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <form onSubmit={handleSignUp}>
            <h4 className="title">SignUp</h4>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
