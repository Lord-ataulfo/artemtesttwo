
import React from 'react';
import { Founder } from '../types';

interface FounderCardProps {
  founder: Founder;
}

const FounderCard: React.FC<FounderCardProps> = ({ founder }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
      <img src={founder.imageUrl} alt={founder.name} className="w-full md:w-1/3 h-64 md:h-auto object-cover"/>
      <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{founder.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{founder.bio}</p>
        <p className="text-gray-700 italic text-sm">"{founder.philosophy}"</p>
      </div>
    </div>
  );
};

export default FounderCard;
