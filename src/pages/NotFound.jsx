import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="not-found">
        <h1>./ 404 Not Found</h1>
        <Link to="/">
          <button className="link-button">Back to ./Hub</button>
        </Link>
      </div>
    );
}

export default NotFound