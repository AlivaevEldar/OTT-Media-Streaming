import Button from "@shared/ui/kit/Button";
import FAQMobile from "./FAQMobile";
import FAQLaptop from "./FAQLaptop";

function FAQ({ styles = "" }) {
  return (
    <section className={`custom-container ${styles}`}>
      <div className="grid gap-y-10 laptop:gap-y-15 desktop:gap-y-20">
        <div className="flex flex-col gap-y-5 items-start laptop:flex-row laptop:items-end laptop:justify-between">
          <div className="flex flex-col gap-y-2.5 desktop:gap-y-3.5">
            <h1 className="font-bold text-2xl text-absolute-white laptop:text-[1.75rem] desktop:text-[2.375rem]">
              Frequently Asked Questions
            </h1>
            <p>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <Button className="w-35 h-12.5 rounded-md text-sm desktop:w-44 desktop:h-16 desktop:rounded-lg desktop:text-lg">
            Ask a Question
          </Button>
        </div>
        <div className="block laptop:hidden">
          <FAQMobile />
        </div>
        <div className="hidden laptop:block">
          <FAQLaptop />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
