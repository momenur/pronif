"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4 overflow-hidden border rounded-lg border-border-light">
      <button
        className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-200 bg-white hover:bg-gray-50"
        onClick={onToggle}
      >
        <h3 className="font-medium text-gray-800 text-18">{question}</h3>
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
          <p className="leading-relaxed text-gray-600 text-16">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label.",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location but generally take 7-14 business days.",
    },
    {
      id: 3,
      question: "Do you offer customer support?",
      answer:
        "Yes! Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. You can reach us via email, phone, or live chat. We strive to respond to all inquiries within 24 hours.",
    },
    {
      id: 4,
      question: "Are there any subscription plans available?",
      answer:
        "We offer several subscription plans with different features and pricing tiers. Our basic plan starts at $9.99/month, with premium plans offering additional benefits like priority support and exclusive features.",
    },
    {
      id: 5,
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time from your account settings. Simply navigate to the 'Billing' section and click 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
    },
    {
      id: 6,
      question: "Is my data secure?",
      answer:
        "Absolutely. We use industry-standard encryption and security measures to protect your data. All sensitive information is encrypted both in transit and at rest, and we regularly undergo security audits to ensure compliance with best practices.",
    },
  ];

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
        <h2 className="mb-4 font-bold text-gray-800 text-32">
          Frequently Asked Questions
        </h2>
        <p className="mb-8 text-gray-600 text-18">
          Find answers to common questions about our services and policies
        </p>

        {/* Toggle All Button */}
        <button
          onClick={toggleAll}
          className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors duration-200 rounded-lg bg-primary hover:bg-primary/90"
        >
          {openItems.size === faqData.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-2">
        {faqData.map((item) => (
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
          <button className="px-6 py-3 font-medium transition-colors duration-200 border-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-white">
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
