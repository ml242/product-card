import ProductCard from "./components/ProductCard";
import { products } from "./api/products";

function App() {
  return (
    <div className="App">
      <div className="Product-Card-Wrapper">
        <ProductCard product={products[0]} />
      </div>
    </div>
  );
}

export default App;
