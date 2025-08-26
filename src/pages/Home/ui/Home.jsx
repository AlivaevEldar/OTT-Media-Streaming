import SubscriptionPlan from "@widget/SubscriptionPlan";
import FAQ from "@widget/FAQ";
import Hero from "./components/Hero/Hero";
import Crossplatform from "./components/Crossplatform/Crossplatform";

function Home() {
  return (
    <>
      <Hero />
      <Crossplatform />
      <FAQ styles="pt-20 laptop:pt-30 desktop:pt-37.5" />
      <SubscriptionPlan styles="pt-20 laptop:pt-30 desktop:pt-37.5" />
    </>
  );
}

export default Home;
