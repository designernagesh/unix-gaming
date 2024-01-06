import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import BuyUnixPage from "./pages/BuyUnixPage";
import CommunityPage from "./pages/CommunityPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/buyunix" element={<BuyUnixPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
