import React from "react";
import CartItem from "./CartItem";
import "./style.css";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Cart</h1>
      </div>
      <CartItem />
      <CartItem />
    </div>
  );
}
