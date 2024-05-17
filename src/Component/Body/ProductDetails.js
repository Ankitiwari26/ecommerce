import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./ProductDetail.css"; // Import the CSS file

const products = [
  {
    id: 0,
    title: "Colors",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: [
      { id: 0, text: "Great product!", rating: 5 },
      { id: 1, text: "Not bad.", rating: 3 },
      { id: 2, text: "Could be better.", rating: 2 },
    ],
  },
  {
    id: 1,
    title: "Black and white Colors",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: [
      { id: 0, text: "Great product!", rating: 5 },
      { id: 1, text: "Not bad.", rating: 3 },
      { id: 2, text: "Could be better.", rating: 2 },
    ],
  },
  {
    id: 2,
    title: "Yellow and Black Colors",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: [
      { id: 0, text: "Great product!", rating: 5 },
      { id: 1, text: "Not bad.", rating: 3 },
      { id: 2, text: "Could be better.", rating: 2 },
    ],
  },
  {
    id: 3,
    title: "Blue Color",
    description:
      " Some quick example text to build on the card title and make up the bulk of the card's content",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: [
      { id: 0, text: "Great product!", rating: 5 },
      { id: 1, text: "Not bad.", rating: 3 },
      { id: 2, text: "Could be better.", rating: 2 },
    ],
  },

  // Add more products here
];

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id.toString() === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <h3>Price: ${product.price}</h3>
//       <h3>Images:</h3>
//       <div>
//         {product.images.map((image, index) => (
//           <img key={index} src={image} alt={`Product ${index}`} />
//         ))}
//       </div>
//       <h3>Reviews:</h3>
//       <ul>
//         {product.reviews.map((review) => (
//           <li key={review.id}>
//             <p>{review.text}</p>
//             <p>Rating: {review.rating}/5</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductDetail;

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    return <div className="product-container">Product not found</div>;
  }

  return (
    <div className="product-container">
      <Header />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <h3 className="product-price">Price: ${product.price}</h3>
      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} />
        ))}
      </div>
      <div className="product-reviews">
        <h3>Reviews:</h3>
        <ul>
          {product.reviews.map((review) => (
            <li key={review.id} className="product-review">
              <p>{review.text}</p>
              <p className="product-review-rating">Rating: {review.rating}/5</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
