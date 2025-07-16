import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./pages/Home";

const Counter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Counter;
