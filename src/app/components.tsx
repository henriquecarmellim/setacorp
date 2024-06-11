"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export function CloudIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
  
  
export function CodeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
  
  
export function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
  
  
export function TabletsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
    </svg>
  );
}

export function Avatar({ children }:any) {
  return <div className="avatar">{children}</div>;
}

export function AvatarImage({ src, alt }: any) {
  return <img src={src} alt={alt} className="size-16 hover:size-full hover:animate-pulse rounded-full object-cover" />;
}

export function LearnMore() {
  function ClickHandler() {
    window.location.href = '/saibamais';
  }

  return (
    <button
      className="inline-flex items-center justify-center h-9 px-4 py-2 text-sm font-medium text-gray-50 bg-gray-900 rounded-md shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      onClick={ClickHandler}
    >
      Saiba Mais
    </button>
  );
}

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            </Avatar>
            <div className="ml-3 sm:ml-4">
              <h4 className="text-lg sm:text-xl font-bold text-black">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm sm:text-base">{testimonial.position}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export const testimonialsData = [
  {
    "name": "Darth Vader and Anakin SkyWalker",
    "position": "CEO, Fogões cia.",
    "avatar": "/avatar1.png",
    "testimonial": "A Seta Corp tem sido um parceiro inestimável em nossa transformação digital. Sua experiência e dedicação foram instrumentais em nosso sucesso."
  },
  {
    "name": "Jane Smith",
    "position": "CTO, Globex Inc.",
    "avatar": "/avatar1.png",
    "testimonial": "A equipe da Seta Corp entregou consistentemente soluções de alta qualidade que transformaram nosso negócio. Não poderíamos estar mais felizes com seus serviços."
  },
  {
    "name": "Jane Smith",
    "position": "CTO, Globex Inc.",
    "avatar": "/avatar1.png",
    "testimonial": "A equipe da Seta Corp entregou consistentemente soluções de alta qualidade que transformaram nosso negócio. Não poderíamos estar mais felizes com seus serviços."
  },
]
  