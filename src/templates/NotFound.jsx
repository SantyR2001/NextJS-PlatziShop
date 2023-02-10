import React from "react";
import "../styles/NotFound.scss";

function NotFound(props) {
  return (
    <div className="container">
      <div className="container-404">
        <h1 className="not-found-title">ERROR 404</h1>
        <h2>Ooops! page not found...</h2>
        <h3>make sure the URL you are looking for is correct</h3>
      </div>
    </div>
  );
}

export default NotFound;
