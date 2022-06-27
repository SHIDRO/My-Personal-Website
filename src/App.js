import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./Components/Products/ProductsList";
import Home from "./pages/Home";
import Cart from "./Components/Cart/Cart";
import { Navigate } from "react-router-dom";
import "./App.css";
import Works from "./pages/Works";

// 1) *add contact me page* - NOW

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="cart/*" element={<Cart />} />
          </Route>

          <Route path="/products" element={<ProductsList />}>
            <Route path="cart/*" element={<Cart />} />
          </Route>

          <Route path="/works" element={<Works/>}>
            <Route path="cart/*" element={<Cart />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
