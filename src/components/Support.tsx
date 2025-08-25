'use client';
import React from 'react';
import Image from 'next/image';

const Support = () => {
  const paymentMethods = [
    {
      name: 'Credit Card',
      icon: '/icons/card.svg',
      address: '4149500120690030',
      description: 'Support via credit card'
    },
    {
      name: 'Bitcoin',
      icon: '/icons/bitcoin.svg',
      address: '3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd',
      description: 'Support via Bitcoin'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Support My Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you find my work valuable and would like to support my open-source projects 
            and content creation, you can contribute through the following methods.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={32}
                  height={32}
                  className="filter grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* Method Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {method.description}
              </p>

              {/* Address */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-500 mb-2">Address:</p>
                <p className="font-mono text-sm text-gray-900 break-all">
                  {method.address}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => copyToClipboard(method.address)}
                className="w-full bg-[#C778DD] hover:bg-[#B968CC] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy Address</span>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Support Options */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Other Ways to Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Star on GitHub</h4>
              <p className="text-gray-600 text-sm">Give my repositories a star to show your support</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Share My Work</h4>
              <p className="text-gray-600 text-sm">Help others discover my projects and content</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Send Feedback</h4>
              <p className="text-gray-600 text-sm">Your feedback helps me improve and create better content</p>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Thank you for your support! Every contribution helps me continue creating 
            open-source projects and sharing knowledge with the community. 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;