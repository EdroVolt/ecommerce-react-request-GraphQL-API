import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./style.css";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const PRODUCT = gql`
    {
      product(id: "${id}") {
        name
        brand
        gallery
        description
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div className="product-details">
      <div className="product-small-photos">
        {data.product.gallery.slice(1, 4).map((img) => {
          return <img key={img} src={img} width="100" alt="" />;
        })}
      </div>
      <div className="product-main-photo">
        <img src={data.product.gallery[0]} width="100%" height="600" alt="" />
      </div>
      <div className="product-details-content">
        <h1>
          {data.product.name}
          <span
            style={{ fontWeight: "400", display: "block", marginTop: "1rem" }}
          >
            {data.product.brand}
          </span>
        </h1>

        <div className="product-details-size">
          <span className="title">size:</span>
          <div className="btn-secondary-group">
            <button className="btn-secondary btn-secondary-out-of-stock">
              xs
            </button>
            <button className="btn-secondary btn-secondary-active">s</button>
            <button className="btn-secondary">m</button>
            <button className="btn-secondary">l</button>
          </div>
        </div>

        <div className="product-details-price">
          <span className="title">price:</span>
          <p className="product-price">
            {data.product.prices[0].currency.symbol}{" "}
            {data.product.prices[0].amount}
          </p>
        </div>

        <button className="btn-add-to-cart">add to cart</button>

        <p className="product-description">
          Find stunning women's cocktail dresses and party dresses. Stand out in
          lace and metallic cocktail dresses and party dresses from all your
          favorite brands.
        </p>
      </div>
    </div>
  );
}
