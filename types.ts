import React from 'react';

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Residencial' | 'Comercial' | 'Público';
  imageUrl: string;
  details?: {
    location?: string;
    year?: number;
    materials?: string[];
  };
}

export interface Founder {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  philosophy: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
