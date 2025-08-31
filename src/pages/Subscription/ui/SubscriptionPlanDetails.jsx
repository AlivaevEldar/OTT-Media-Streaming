import {
  plansNameArray,
  plansTableArray,
  plansCardArray,
} from "../const/Array";
import { useState } from "react";

function SubscriptionPlanDetailsTable() {
  return (
    <div
      className="
      hidden laptop:block
      laptop:bg-black-15
       laptop:rounded-[0.625rem] laptop:border-2 laptop:border-black-15 desktop:rounded-xl
       laptop:overflow-hidden
      "
    >
      <ul className="grid grid-cols-4 gap-0.5">
        {["Features", "Basic", "Standard", "Premium"].map((text, index) => (
          <li
            className="
              laptop:flex laptop:items-center
              laptop:p-6 desktop:p-7.5
              laptop:text-absolute-white laptop:font-semibold laptop:text-lg desktop:text-xl
              laptop:bg-black-06"
          >
            {text}
            {text === "Standard" && (
              <span
                className="
                  laptop:p-1.5 laptop:ml-2 desktop:px-2.5
                  laptop:font-medium laptop:text-sm laptop:text-absolute-white 
                  laptop:bg-red-45
                  laptop:rounded-xs
                "
               >
                Popular
              </span>
            )}
          </li>
        ))}
        {plansTableArray.map((text, index) => (
          <li
            className="laptop:p-6 desktop:p-7.5 laptop:text-grey-60 laptop:font-medium laptop:text-base laptop:bg-black-08 desktop:text-lg"
            key={index}
          >
            {...text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubscriptionPlanDetailsCard() {
  const [activePlan, setActivePlan] = useState(plansNameArray[1]);

  return (
    <div className="grid gap-y-5 laptop:hidden">
      <div
        className="
          grid grid-cols-3
          p-2
          bg-black-06
          border border-black-15 rounded-lg
        "
      >
        {plansNameArray.map((text) => (
          <button
            className={`
              font-medium text-sm
              py-3
              ${
                text === activePlan
                  ? `text-absolute-white 
                     bg-black-12 rounded-md`
                  : "text-grey-60"
              }
            `}
            type="button"
            onClick={() => setActivePlan(text)}
          >
            {text}
          </button>
        ))}
      </div>
      <article
        className="
          p-6
          bg-black-06
          border border-black-15 rounded-xl
        "
      >
        {plansCardArray.map((card, cardIndex) =>
          activePlan === plansNameArray[cardIndex] ? (
            <ul className="grid grid-cols-2 gap-y-6 gap-x-5">
              {card.map((obj) => (
                <li className={obj.style}>
                  <Title>{obj.title}</Title>
                  <Description>{obj.description}</Description>
                </li>
              ))}
            </ul>
          ) : null
        )}
      </article>
    </div>
  );
}

const Title = ({ children }) => {
  return <h6 className="font-medium text-sm text-grey-60">{children}</h6>;
};

const Description = ({ children }) => {
  return (
    <span className="mt-1 font-medium text-sm text-grey-95">{children}</span>
  );
};

function SubscriptionPlanDetails() {
  return (
    <>
      <SubscriptionPlanDetailsCard />
      <SubscriptionPlanDetailsTable />
    </>
  );
}

export default SubscriptionPlanDetails;
