import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerlogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="headersearch">
        <input type="text" className="headersearchinput" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headernav">
        <Link to="/login">
          <div className="headeroption">
            <span className="headerOptionOne">Hello Guest</span>
            <span className="headerOptionTwo">Sign In</span>
          </div>
        </Link>
        <div className="headeroption">
          <span className="headerOptionOne">Returns</span>
          <span className="headerOptionTwo">& Orders</span>
        </div>
        <div className="headeroption">
          <span className="headerOptionOne">Your</span>
          <span className="headerOptionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="headeroptionBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
