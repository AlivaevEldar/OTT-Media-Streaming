import Header from "@widget/Header";
import Home from "@pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@widget/Footer";
import Promo from "@widget/Promo";
import Support from "@pages/Support";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Promo />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
