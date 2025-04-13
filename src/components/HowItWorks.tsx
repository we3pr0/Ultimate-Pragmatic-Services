import React from 'react';
import { ClipboardList, BarChart, MessageSquare, FileCheck, FileText } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Schedule a free consultation to discuss your project requirements and goals in detail.',
    icon: ClipboardList
  },
  {
    id: 2,
    title: 'Custom Proposal',
    description: 'Receive a tailored proposal outlining scope, deliverables, timeline, and investment.',
    icon: BarChart
  },
  {
    id: 3,
    title: 'Development & Updates',
    description: 'Our team begins work with regular progress updates and collaborative feedback sessions.',
    icon: MessageSquare
  },
  {
    id: 4,
    title: 'Review & Refinement',
    description: 'Review the initial draft and provide feedback for any necessary adjustments.',
    icon: FileCheck
  },
  {
    id: 5,
    title: 'Final Delivery',
    description: 'Receive your polished, professional documents ready for immediate use.',
    icon: FileText
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            A simple, transparent process designed to deliver exceptional results for your business.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-primary-100 -translate-y-1/2" />
          
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number with icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-100">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-600 text-white text-sm font-medium flex items-center justify-center">
                    {step.id}
                  </div>
                </div>

                {/* Step content */}
                <div className="mt-2">
                  <h3 className="text-lg font-display font-semibold text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-16 bg-secondary-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-display font-semibold text-secondary-900 mb-4">
            Simple Payment Terms
          </h3>
          <p className="text-secondary-600">
            50% of the agreed project fee is required upfront to begin work, with the remaining balance due upon completion and your complete satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;