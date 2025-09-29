'use client';
import React, { useState } from 'react';
import PricingCard from '@/components/PricingCard';
import ScrollReveal from '@/components/ScrollReveal';

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

const Plans: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: Plan[] = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'For those getting started with WebPro',
      features: [
        'WebPro.io domain',
        '3 pages',
        '20 CMS collections',
        '30 CMS items',
        '50 form submissions (lifetime)',
        'Free Localization preview',
        '1 GB bandwidth',
      ],
      buttonText: 'Start 7 day free trial',
      buttonVariant: 'primary',
    },
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      description: 'For better experience with WebPro',
      features: [
        'WebPro.io domain',
        '100 pages',
        '50 CMS collections',
        '60 CMS items',
        '550 form submissions (lifetime)',
        'Free Localization preview',
        '10 GB bandwidth',
      ],
      buttonText: 'Start 7 day free trial',
      buttonVariant: 'primary',
    },
    {
      name: 'Business',
      price: '$29.99',
      period: '/month',
      description: 'For the best experience with WebPro',
      features: [
        'WebPro.io domain',
        '1000 pages',
        '100 CMS collections',
        '1500 CMS items',
        '900 form submissions (lifetime)',
        'Free Localization preview',
        '100 GB bandwidth',
      ],
      buttonText: 'Contact Us',
      buttonVariant: 'secondary',
    },
  ];

  return (
    <section className="min-h-screen text-white bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center px-4 py-8" id="plans">
      <div className="text-center mb-10">
        <p className="text-gray-600 uppercase text-sm tracking-widest mb-2">People Operations Platform</p>
        <h1 className="text-5xl font-bold text-gray-600">Select The Best Plan</h1>
        <h2 className="text-5xl font-bold text-gray-600">For Your Needs</h2>
      </div>

      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {plans.map((plan, index) => (
          <ScrollReveal key={index} distance={60} direction={index === 1 ? "top" : "bottom"}><PricingCard {...plan} isYearly={isYearly} /></ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Plans;
