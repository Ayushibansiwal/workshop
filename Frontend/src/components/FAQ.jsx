import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need coding experience?",
      answer: "No, this workshop starts from foundational steps and is beginner friendly."
    },
    {
      question: "Will recordings be provided?",
      answer: "Yes, lifetime access to all recorded workshop sessions will be provided."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, verified certificates will be issued dynamically upon completion."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-100 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-5 font-semibold text-sm md:text-base text-left text-slate-800 transition-colors ${
                    isOpen ? "bg-slate-50" : "bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <span>{faq.question}</span>
                  <span className={`text-xs transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 bg-slate-50/50 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;