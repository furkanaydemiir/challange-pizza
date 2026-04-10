import React from "react";
import { Helmet } from "react-helmet";

function Deneme({ value }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{value}</title>
          <link rel="icon" type="image/svg+xml" href="./workintech.svg" />

        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
}

export default Deneme;
