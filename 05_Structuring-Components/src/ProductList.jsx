import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="product-list">
      <ProductCard name="iPhone 15" price="₹79,999" />
      <ProductCard name="Laptop" price="₹59,999" />
      <ProductCard name="Headphones" price="₹2,999" />
      <ProductCard name="Shoes" price="₹3,499" />
    </section>
  );
}

export default ProductList;
