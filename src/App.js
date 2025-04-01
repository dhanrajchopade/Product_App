import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Nav } from "./components/Nav";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
