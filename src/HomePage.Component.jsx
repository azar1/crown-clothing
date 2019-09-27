import React from "react";
import "./homePage.styles.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <spam className="subtitle">Shop Now</spam>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets </h1>
            <spam className="subtitle">Shop Now</spam>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <spam className="subtitle">Shop Now</spam>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Womens</h1>
            <spam className="subtitle">Shop Now</spam>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mens</h1>
            <spam className="subtitle">Shop Now</spam>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
