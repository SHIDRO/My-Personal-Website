import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./Components/Products/ProductsList";
import Home from "./pages/Home";
import Cart from "./Components/Cart/Cart";
import { Navigate } from "react-router-dom";

// 1) add contact me page
// 2) consider auth logic

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="/products" element={<ProductsList />}>
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="/about" element={<h1>About me</h1>}>
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
