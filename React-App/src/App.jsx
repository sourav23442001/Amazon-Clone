import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
