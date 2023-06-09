import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/images/error.jpg";

const Error = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Page not found! 4O4</h1>
          <img src={error} alt="Error page" />
          <Link to="/" className="btn btn-warning text-red-900">
            Go back Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
