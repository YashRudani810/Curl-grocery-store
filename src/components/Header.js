import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header class="main_menu home_menu">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/">
                  {" "}
                  <img src="img/logo.png" alt="logo" height="70px" width="130px" />{" "}
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="menu_icon">
                    <i class="fas fa-bars"></i>
                  </span>
                </button>

                <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link to="/Product" class="nav-link " role="button">
                        Shop
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link to="/Contect" class="nav-link " role="button">
                        Contect
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link to="/Blog" class="nav-link " role="button">
                        Blog
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link to="/Cart" class="nav-link " role="button">
                        Cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
