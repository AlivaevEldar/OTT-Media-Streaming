import IconWrapper from "@shared/ui/kit/IconWrapper";
import { iconWrapperVariant } from "@shared/consts/variant";
import { useState } from "react";

function FAQLaptop() {
  const [openFAQ, setOpenFAQ] = useState([]);

  const faq = [
    [
      {
        id: "01",
        question: "What is StreamVibe?",
        answer:
          "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
      },
      {
        id: "02",
        question: "How much does StreamVibe cost?",
        answer:
          "StreamVibe offers multiple subscription plans starting from $9.99 per month.",
      },
      {
        id: "03",
        question: "What content is available on StreamVibe?",
        answer:
          "StreamVibe offers movies, TV shows, documentaries, and exclusive originals.",
      },
      {
        id: "04",
        question: "How can I watch StreamVibe?",
        answer:
          "You can watch StreamVibe on your web browser, mobile app, smart TV, or streaming devices.",
      },
    ],
    [
      {
        id: "05",
        question: "How do I sign up for StreamVibe?",
        answer:
          "You can sign up by creating an account on the StreamVibe website or via the app.",
      },
      {
        id: "06",
        question: "What is the StreamVibe free trial?",
        answer:
          "StreamVibe offers a 7-day free trial for new users to explore the service.",
      },
      {
        id: "07",
        question: "How do I contact StreamVibe customer support?",
        answer:
          "You can contact support via email, live chat, or phone through the StreamVibe Help Center.",
      },
      {
        id: "08",
        question: "What are the StreamVibe payment methods?",
        answer:
          "StreamVibe accepts credit/debit cards, PayPal, and other online payment options.",
      },
    ],
  ];

  return (
    <div className="laptop:grid laptop:grid-cols-2 laptop:gap-x-10 desktop:gap-x-20">
      {faq.map((chunk, index) => (
        <ul key={index}>
          {chunk.map((FAQ, index) => (
            <li key={index}>
              <article
                className={`laptop:p-6 laptop:grid laptop:grid-cols-[auto_1fr_auto] laptop:gap-x-4 desktop:px-8.5 desktop:gap-x-5 ${
                  openFAQ.includes(FAQ.question)
                    ? "laptop:items-start desktop:py-8.5"
                    : "laptop:items-center desktop:py-7.5"
                }`}
              >
                <IconWrapper type={iconWrapperVariant.questions}>
                  <span className="laptop:text-base laptop:text-absolute-white laptop:font-semibold laptop:leading-none desktop:text-xl">
                    {FAQ.id}
                  </span>
                </IconWrapper>
                <div className="">
                  <h2 className="laptop:text-xl laptop:font-medium laptop:text-absolute-white desktop:text-xl-[1.375rem]">
                    {FAQ.question}
                  </h2>
                  <div
                    className={`${
                      openFAQ.includes(FAQ.question)
                        ? "laptop:mt-3 laptop:block desktop:mt-5"
                        : "laptop:hidden"
                    }`}
                  >
                    <p>{FAQ.answer}</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setOpenFAQ((prev) =>
                      prev.includes(FAQ.question)
                        ? prev.filter((element) => element != FAQ.question)
                        : [...prev, FAQ.question]
                    )
                  }
                  className="laptop:w-6 laptop:h-6 laptop:relative desktop:w-7.5 desktop:h-7.5"
                >
                  <span className="laptop:absolute laptop:top-1/2 laptop:left-1/2 laptop:-translate-1/2 laptop:block laptop:w-4 laptop:border laptop:border-absolute-white laptop:rounded-full desktop:w-5 desktop:border-2"></span>
                  <span className={`laptop:absolute laptop:top-1/2 laptop:left-1/2 laptop:-translate-1/2 laptop:border-1 laptop:h-4 laptop:border-absolute-white laptop:rounded-full desktop:h-5 desktop:border-2 ${openFAQ.includes(FAQ.question) ? "hidden" : "laptop:block"}`}></span>
                </button>
              </article>
              <div
                className={`w-full h-0.5 rounded-full bg-[linear-gradient(to_right,#e5000000_0%,_#e50000_17%,#e5000000_100%)] ${
                  index >= chunk.length - 1 && "hidden"
                }`}
              ></div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default FAQLaptop;
