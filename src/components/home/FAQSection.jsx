"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { faqData } from "@/components/home/helpers/uiData";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4 overflow-hidden border rounded-lg border-border-light">
      <button
        className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-200 bg-white hover:bg-gray-50"
        onClick={onToggle}
      >
        <h3 className="font-medium text-border-dark text-18">{question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-4 border-t bg-gray-50 border-border-light">
          <p className="leading-relaxed text-border-regular text-16">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === faqData.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(faqData.map((item) => item.id)));
    }
  };

  return (
    <div className="max-w-4xl px-6 py-12 mx-auto">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-dark text-32">
          Frequently Asked Questions
        </h2>
        <p className="mb-8 text-border-dark text-18">
          Find answers to common questions about our services and policies
        </p>

        {/* Toggle All Button */}
        <button
          onClick={toggleAll}
          className="py-3 px-5 bg-gradient-to-r from-primary to-primary-main text-white text-16 font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          {openItems.size === faqData?.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-2">
        {faqData?.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>

      {/* Contact Section */}
      <div className="p-8 mt-12 text-center rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
        <h3 className="mb-4 font-semibold text-gray-800 text-24">
          Still have questions?
        </h3>
        <p className="mb-6 text-gray-600 text-16">
          Can't find the answer you're looking for? Our support team is here to
          help.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="px-6 py-3 font-medium text-white transition-colors duration-200 rounded-lg bg-primary hover:bg-primary/90">
            Contact Support
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-main text-white text-16 font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-300">
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
