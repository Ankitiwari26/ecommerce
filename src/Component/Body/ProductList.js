import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../Store/CartProvider";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";

const products = [
  {
    title: "Colors",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around">
        {products.map((product, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <NavLink to={`/product-detail/${index}`}>
                <Card.Title>{product.title}</Card.Title>
              </NavLink>
              <NavLink to={`/product-detail/${index}`}>
                <Card.Text>{product.description}</Card.Text>
              </NavLink>
              <NavLink to={`/product-detail/${index}`}>
                <Card.Text>Price: ${product.price}</Card.Text>
              </NavLink>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
