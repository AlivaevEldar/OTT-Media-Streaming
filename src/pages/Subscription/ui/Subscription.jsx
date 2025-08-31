import SubscriptionPlan from "@widget/SubscriptionPlan";
import SubscriptionPlanDetails from "./SubscriptionPlanDetails";

function Subscription() {
  return (
    <>
      <SubscriptionPlan styles="p-10 laptop:p-25" />
      <section
        className="
          custom-container
          grid gap-y-10 laptop:gap-y-15 desktop:gap-y-20
          pt-20 laptop:pt-30 desktop:pt-37.5
        "
      >
        <div className="grid gap-y-2 laptop:gap-y-2.5 desktop:gap-3.5">
          <h1 className="text-2xl text-absolute-white font-bold laptop:text-[2.375rem] desktop:text-5xl">
            Compare our plans and find the right one for you
          </h1>
          <p>
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for <br className="hidden laptop:block" /> you.
          </p>
        </div>
        <SubscriptionPlanDetails />
      </section>
    </>
  );
}

export default Subscription;
