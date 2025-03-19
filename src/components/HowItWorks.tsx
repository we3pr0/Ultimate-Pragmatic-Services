import React from 'react';
import { ClipboardList, BarChart, MessageSquare, FileCheck, FileText } from 'lucide-react';

const steps = [
  // {
  //   id: 1,
  //   title: 'Order',
  //   description: 'Request a business plan using our form. A consultant will contact you within 2-3 hours to discuss your project in detail.',
  //   icon: <ClipboardList className="h-8 w-8 text-indigo-600" />
  // },
  // {
  //   id: 2,
  //   title: 'Project Roadmap',
  //   description: 'After a client briefing meeting, you will receive a quote. A 50% Payment of the Quote would be required to kick off the project.',
  //   icon: <BarChart className="h-8 w-8 text-indigo-600" />
  // },
  // {
  //   id: 3,
  //   title: 'Progress Reports',
  //   description: 'As we work on your project, we provide weekly progress updates with key details and address any issues requiring clarification.',
  //   icon: <MessageSquare className="h-8 w-8 text-indigo-600" />
  // },
  // {
  //   id: 4,
  //   title: 'First Draft Delivery',
  //   description: 'Our consultants provide an initial project draft with all approved deliverables for your review and feedback.',
  //   icon: <FileCheck className="h-8 w-8 text-indigo-600" />
  // },
  // {
  //   id: 5,
  //   title: 'Final Report Delivery',
  //   description: 'After implementing your feedback and making necessary improvements, we deliver the final project report.',
  //   icon: <FileText className="h-8 w-8 text-indigo-600" />
  // }
];

const HowItWorks = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get an expertly written business plan in 5 easy steps
          </p>
        </div>
        
        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full -ml-px bg-indigo-200"></div>
            
            {/* <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.id} className={`relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:flex items-center md:space-x-4">
                    <div className="flex md:flex-1 justify-center md:justify-end">
                      <div className={`w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center z-10 ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:flex-1">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-900">
                          {step.id}. {step.title}
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-900">
            PAYMENT TERMS: 50% of agreed upon project fee will be paid up front, with the remaining balance paid upon completion (When 100% satisfaction is reached)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;