import React from "react";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "./ProductCard";
import "./style.css";
import MainHeader from "../MainHeader/indexx";
import { Link } from "react-router-dom";

const CATEGORY_PRODUCTS = gql`
  {
    category {
      products {
        id
        name
        gallery
        prices {
          amount
        }
      }
    }
  }
`;

export default function ProductList({ categoryName }) {
  const { loading, error, data } = useQuery(CATEGORY_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const products = data.category.products;

  return (
    <>
      <MainHeader title={categoryName} />
      <div className="product-list">
        {products.map(({ gallery, name, price, id }) => {
          return (
            <Link key={name} to={`/productDetails/${id}`}>
              <ProductCard imgSrc={gallery[0]} name={name} price={price} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
