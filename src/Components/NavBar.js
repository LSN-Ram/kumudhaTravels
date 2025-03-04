import React from "react";

const NavBar = () => {
  return (
    <>
      <header class="top-area">
        <div class="header-area">
          <div class="container">
            <div class="row">
              <div class="col-sm-2">
                <div class="logo">
                  <a href="#">
                    Kumudha<span>Travels</span>
                  </a>
                </div>
              </div>
              <div class="col-sm-10">
                <div class="main-menu">
                  <div class="navbar-header">
                    <button
                      type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <i class="fa fa-bars"></i>
                    </button>
                  </div>
                  <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                      <li class="smooth-menu">
                        <a href="#home">home</a>
                      </li>
                      <li class="smooth-menu">
                        <a href="#gallery">Destination</a>
                      </li>
                      <li class="smooth-menu">
                        <a href="#pack">Packages </a>
                      </li>
                      <li class="smooth-menu">
                        <a href="#spo">Special Offers</a>
                      </li>
                      <li class="smooth-menu">
                        <a href="#blog">blog</a>
                      </li>
                      <li class="smooth-menu">
                        <a href="#subs">subscription</a>
                      </li>
                      <li>
                        <button class="book-btn">book now</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="home-border"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
