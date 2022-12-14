import React from "react";
import { Link } from "react-router-dom";

import Image404 from "../../components/img/404.png";

import "./Page404.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Page404() {
  return (
    <div className="page-404">
      <div className="image-404">
        <img src={Image404} alt="" />
      </div>
      <h1>Page not found</h1>
      <Link to="/" className="link">
        <div className="link-404">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" className="icon-404" />
          <h3>Back to home page</h3>
        </div>
      </Link>
    </div>
  );
}
