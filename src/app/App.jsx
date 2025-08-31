import Header from "@widget/Header";
import Home from "@pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@widget/Footer";
import Promo from "@widget/Promo";
import Support from "@pages/Support";
import Subscription from "@pages/Subscription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscription />} />
        </Routes>
        <Promo />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
