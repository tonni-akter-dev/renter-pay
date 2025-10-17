import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1); // First item is open by default

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How long does an inspection take?",
      answer: "Most inspections take 20–45 minutes, depending on the size of the property. Our agent will guide you through each feature and answer your questions during the visit."
    },
    {
      id: 2,
      question: "Can I reschedule my appointment?",
      answer: "Yes, you can reschedule your appointment up to 24 hours before the scheduled time. Simply log into your account, go to your appointments, and select the reschedule option. If you need to make changes within 24 hours, please contact our support team directly."
    },
    {
      id: 3,
      question: "Do I need to bring documents?",
      answer: "For your first inspection, you'll need to provide a valid ID, driver's license, or passport. If you're planning to rent the property, you may also want to bring proof of income and references. Our agent will let you know if any additional documents are required for the specific property you're viewing."
    },
    {
      id: 4,
      question: "Is there any cost for booking an inspection?",
      answer: "No, booking an inspection is completely free of charge. There are no fees or obligations associated with viewing any of our properties. We believe in transparency and want you to make an informed decision without any pressure."
    },
    {
      id: 5,
      question: "Can I bring someone with me to the inspection?",
      answer: "Absolutely! You're welcome to bring family members, friends, or a rental advisor to the inspection. We recommend letting us know in advance if you plan to bring multiple people so we can ensure the agent has enough time to address everyone's questions."
    },
    {
      id: 6,
      question: "What happens after the inspection?",
      answer: "After the inspection, you'll have the opportunity to ask any remaining questions. If you're interested in the property, you can submit an application through our platform. Our team will review your application and typically respond within 24-48 hours. We'll guide you through the next steps if your application is approved."
    }
  ];

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about property inspections</p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <span 
                  className={`flex-shrink-0 ml-2 transition-transform duration-300 ease-in-out ${
                    activeItem === item.id ? 'rotate-45' : ''
                  }`}
                >
                  <svg 
                    className="h-6 w-6 text-primary-500" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                    />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeItem === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;