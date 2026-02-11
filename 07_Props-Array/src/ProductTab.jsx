import Product from "./Product";
import "./ProductTab.css"

export default function ProductTab() {
  let features = ["hi-tech" , "durable" , "fast"]
  return (
    <div className="ProductTab">
      <Product name="Laptop"price = {50000} />
      <Product name="Phone" price = {45000} />
    </div>
  );
}
