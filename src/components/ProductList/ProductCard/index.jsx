import React from "react";
import "./style.css";

export default function ProductCard({ imgSrc, name, price }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <img src={imgSrc} width="350" alt="producd" />
        {/* TODO: addToCart Icon */}
      </div>
      <div className="product-card-body">
        <p className="produc-name">{name}</p>
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
}
