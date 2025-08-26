import { useState } from "react";
import Button from "@shared/ui/kit/Button";

function SubscriptionPlan({ styles = "" }) {
  const [variantPlan, setVariantPlan] = useState("Monthly");

  const plans = [
    {
      title: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: 9.99,
    },
    {
      title: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      price: 12.99,
    },
    {
      title: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
      price: 14.99,
    },
  ];

  return (
    <section className={`custom-container ${styles}`}>
      <div className="grid gap-y-10 laptop:gap-y-15 desktop:gap-y-20">
        <div className="flex flex-col gap-y-5 items-start laptop:flex-row laptop:items-end laptop:justify-between">
          <div className="flex flex-col gap-y-2.5 desktop:gap-y-3.5">
            <h1 className="font-bold text-2xl text-absolute-white laptop:text-[1.75rem] desktop:text-[2.375rem]">
              Choose the plan that's right for you
            </h1>
            <p>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop{" "}
              <br className="hidden laptop:block desktop:hidden" />
              entertainment!
            </p>
          </div>
          <div className="p-2 rounded-lg border border-black-15 desktop:p-2.5 desktop:rounded-[0.625rem]">
            {["Monthly", "Yearly"].map((label) => (
              <button
                key={label}
                onClick={() => setVariantPlan(label)}
                className={`py-3 px-5 rounded-md text-sm font-medium desktop:py-3.5 desktop:px-6 desktop:text-lg desktop:rounded-[0.625rem] ${
                  variantPlan === label
                    ? "text-absolute-white bg-black-12"
                    : " text-grey-60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <ul className="grid gap-5 lg:grid-cols-3 desktop:gap-7.5">
          {[
            plans.map((plan, index) => (
              <li key={index}>
                <article className="rounded-[0.625rem] h-full border-black-15 border p-6 grid gap-y-7.5 laptop:gap-y-10 laptop:p-10 desktop:p-12.5 desktop:gap-y-12.5">
                  <div className="">
                    <h1 className="text-absolute-white font-bold text-lg laptop:text-xl desktop:text-2xl">
                      {plan.title}
                    </h1>
                    <p className="mt-2.5 laptop:mt-3 desktop:mt-4">
                      {plan.description}
                    </p>
                  </div>
                  <div className="flex items-end gap-x-1">
                    <h2 className="text-absolute-white text-2xl font-semibold !leading-[0.73] laptop:text-3xl desktop:text-[2.5rem]">
                      {variantPlan === "Monthly" && plan.price}
                      {variantPlan === "Yearly" && plan.price * 12}
                    </h2>
                    <span className="!leading-[0.73] font-medium text-sm text-grey-60 laptop:text-base desktop:text-lg">
                      {variantPlan === "Monthly" && "/month"}
                      {variantPlan === "Yearly" && "/year"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 desktop:gap-x-5">
                    <button
                      className="
                        font-semibold text-sm rounded-md text-absolute-white h-12 border border-black-15 desktop:text-lg desktop:rounded-lg desktop:h-16
                      "
                    >
                      Start Free Trial
                    </button>
                    <Button styles="h-12 rounded-md text-sm desktop:text-lg desktop:rounded-lg desktop:h-16">
                      Choose Plan
                    </Button>
                  </div>
                </article>
              </li>
            )),
          ]}
        </ul>
      </div>
    </section>
  );
}

export default SubscriptionPlan;
