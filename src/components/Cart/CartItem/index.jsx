import React from "react";

export default function CartItem() {
  return (
    <div className="cartItem">
      <div className="left">
        <h1>
          Apollo
          <span
            style={{ fontWeight: "400", display: "block", marginTop: "1rem" }}
          >
            Running Short
          </span>
        </h1>

        <p className="product-price">$50.00</p>

        <div className="btn-group">
          <button className="btn-secondary ">s</button>
          <button className="btn-secondary btn-secondary-active">m</button>
        </div>
      </div>

      <div className="right">
        <div className="product-count-controls">
          <button className="btn-secondary">+</button>
          <span>1</span>
          <button className="btn-secondary">-</button>
        </div>

        <img
          src="https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M="
          width="250em"
          alt=""
        />
      </div>
    </div>
  );
}
