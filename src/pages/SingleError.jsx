import { useRouteError } from "react-router-dom";

import React from "react";

const SingleError = () => {
  const error = useRouteError();
  console.log(error);

  // return <h2>{error.message}</h2>;
  return <h2>where wasss a error.</h2>;
};

export default SingleError;
