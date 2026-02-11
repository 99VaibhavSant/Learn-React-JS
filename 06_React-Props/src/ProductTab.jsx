import Product from "./Product";

export default function ProductTab() {
  return (
    <div>
      <Product
        name="Laptop"
        price = {55}
      />
      <Product name="Phone" price = {45000} />
    </div>
  );
}
