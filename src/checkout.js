/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./checkout.css";
import Subtotal from './subtotal';

function checkout() {
    return (
        <div className="checkout">
            <div className = "checkout__left">
                <img className = "checkout__ad"
                    src = "https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
                    alt = ""  
                />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    
                </div>
            </div>

            <div className = "checkout__right">
                <Subtotal/>

                {/* subtotal compo */}
            </div>
        </div>
    )
}

export default checkout
