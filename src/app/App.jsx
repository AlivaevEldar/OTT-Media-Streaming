import Header from "@widget/Header";
import Home from "@pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@widget/Footer";
import Promo from "@widget/Promo";
import FAQ from "@widget/FAQ"
import SubscriptionPlan from "@widget/SubscriptionPlan";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Promo />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
