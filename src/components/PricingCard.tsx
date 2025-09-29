'use client';
import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period = '/month',
  description,
  features,
  buttonText,
  buttonVariant,
  isYearly,
}) => {
  const isBusiness = name === 'Business';

  const priceDisplay =
    isYearly && price !== 'Free'
      ? `$${(parseFloat(price.replace('$', '')) * 10 * 0.8).toFixed(2)}`
      : price;
  const periodDisplay = isYearly && price !== 'Free' ? '/year' : period;

  // Card Classes
  const cardClasses = `
    rounded-3xl p-8 shadow-xl flex flex-col items-start text-left w-full max-w-sm
    transition-transform duration-300 hover:scale-105
    ${isBusiness ? 'bg-gradient-to-br from-purple-600 via-pink-500 to-pink-400 text-white' : 'bg-white text-gray-800'}
  `;

  // Feature Item Classes
  const featureItemClasses = `
    flex items-center mb-3 text-sm
    ${isBusiness ? 'text-white' : 'text-gray-600'}
  `;

  // Button Classes with creative hover effect
  const buttonClasses = `
    mt-8 w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer
    ${buttonVariant === 'primary'
      ? isBusiness
        ? 'bg-white text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-pink-400 hover:text-white hover:scale-105 hover:shadow-xl'
        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 hover:scale-105 hover:shadow-lg'
      : isBusiness
      ? 'bg-white text-purple-600 hover:bg-purple-100 hover:scale-105 hover:shadow-lg'
      : 'bg-white text-purple-600 border border-purple-400 hover:bg-purple-50 hover:scale-105 hover:shadow-md'}
  `;

  return (
    <div className={cardClasses}>
      {/* Header */}
      <div className="flex items-center mb-4">
        {name === 'Starter' && (
          <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center mr-3">
            <span className="text-pink-600 text-xl font-bold">●</span>
          </div>
        )}
        {name === 'Basic' && (
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
            <span className="text-purple-600 text-xl font-bold">★</span>
          </div>
        )}
        {isBusiness && (
          <div className="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center mr-3">
            <span className="text-white text-xl font-bold">◆</span>
          </div>
        )}
        <h3 className={`text-xl font-bold ${isBusiness ? 'text-white' : 'text-gray-800'}`}>{name}</h3>
      </div>

      {/* Price */}
      <p className={`text-5xl font-bold mb-2 ${isBusiness ? 'text-white' : 'text-gray-900'}`}>
        {priceDisplay}
        {price !== 'Free' && (
          <span className={`text-lg font-medium ${isBusiness ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
            {periodDisplay}
          </span>
        )}
      </p>

      {/* Description */}
      <p className={`mb-6 text-sm ${isBusiness ? 'text-white text-opacity-80' : 'text-gray-600'}`}>
        {description}
      </p>

      {/* Features */}
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className={featureItemClasses}>
            <span className={`text-xs mr-2 ${isBusiness ? 'text-white' : 'text-pink-500'}`}>●</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={buttonClasses}>{buttonText}</button>
    </div>
  );
};

export default PricingCard;
