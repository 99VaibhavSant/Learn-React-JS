import Product from "./Product.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Product title="Phone" price={30000} />
      <Product title="Laptop" price={40000} />
      <Product title="HeadPhone" price={60000} />
    </>
  );
}

export default App;
