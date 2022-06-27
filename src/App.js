import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./Components/Products/ProductsList";
import Home from "./pages/Home";
import Cart from "./Components/Cart/Cart";
import { Navigate } from "react-router-dom";
import './App.css'

// 1) *add contact me page* - NOW
// 2) ADD WORKS (EXAMPLE OF PREV WORKS)

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

          <Route path="/about" element={<h1>About me</h1>}>
            <Route path="cart/*" element={<Cart />} />
          </Route>

          <Route path="/works" element={<h1>My Masterpieces.</h1>}>

          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
