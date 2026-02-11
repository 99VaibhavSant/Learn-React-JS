import "./Product.css";

function Product({ name, price }) {
  return (
    <div className="Product">
      <h1>Product is {name} </h1>
      <p>Product price is {price} </p>
    </div>
  );
}

export default Product;
