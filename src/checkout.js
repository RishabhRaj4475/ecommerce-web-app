import React from 'react';
import { Link } from 'react-router-dom';
import "./checkout.css";
import { useStateValue } from './stateProvider';
import Subtotal from './subtotal';
import CheckoutProduct from "./checkoutproduct.js";


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
      <div className="checkout">
        <div className="checkout__left">
          <Link to="/">
            <img
              className="checkout__ad"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
              alt=""
            />
          </Link>
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
  
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
  }
  
  export default Checkout;
  