import Button from "@shared/ui/kit/Button";
import IconWrapper from "@shared/ui/kit/IconWrapper";
import { iconWrapperVariant } from "@shared/consts/variant";
import { useState } from "react";

function FAQMobile() {
  const [openFAQ, setOpenFAQ] = useState([]);

  const faq = [
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
  ];

  return (
    <ul className="">
      {faq.map((FAQ, index) => (
        <li key={FAQ.id}>
          <article className="py-5 px-2.5">
            <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center">
              <IconWrapper type={iconWrapperVariant.questions}>
                <div className="text-absolute-white font-semibold text-base">
                  {FAQ.id}
                </div>
              </IconWrapper>
              <h2 className="text-absolute-white text-lg font-medium">
                {FAQ.question}
              </h2>
              <button
                onClick={() =>
                  setOpenFAQ((prev) =>
                    prev.includes(FAQ.question)
                      ? prev.filter((element) => element != FAQ.question)
                      : [...prev, FAQ.question]
                  )
                }
                className="w-6 h-6 relative"
              >
                <span className="absolute top-1/2 left-1/2 -translate-1/2 block w-4 border border-absolute-white rounded-full"></span>
                <span className="absolute top-1/2 left-1/2 -translate-1/2 block border-1 h-4 border-absolute-white rounded-full"></span>
              </button>
            </div>
            <div
              className={`${
                openFAQ.includes(FAQ.question) ? "mt-3 block" : "hidden"
              }`}
            >
              <p>{FAQ.answer}</p>
            </div>
          </article>
          <div
            className={`w-full h-0.5 my-5 rounded-full bg-[linear-gradient(to_right,#e5000000_0%,_#e50000_17%,#e5000000_100%)] ${
              index >= faq.length - 1 && "hidden"
            }`}
          ></div>
        </li>
      ))}
    </ul>
  );
}

export default FAQMobile;
