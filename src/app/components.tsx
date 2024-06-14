"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline'

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
  )
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

export function HeaderG({ children }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-azulzin text-whitesmoke py-4 px-6 md:px-12 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <MountainIcon className="h-8 w-8 mr-2" />
          <Link href="/">
            <span className="text-xl font-bold">Seta Corp</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:underline" prefetch={false}>
            Início
          </Link>
          <Link href="/#products" className="hover:underline" prefetch={false}>
            Produtos
          </Link>
          <Link href="/#testimonials" className="hover:underline" prefetch={false}>
            Depoimentos
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contato
          </Link>
        </nav>
        <button className="hidden md:inline-flex" onClick={openModal}>
          Comece Agora
        </button>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Informações">
          <h2>Funcionalidade ainda não funcional</h2>
        </Modal>
      )}
    </header>
  );
}

const Modal = ({ isOpen, onClose, children, title }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="modal bg-white rounded-lg shadow-lg max-w-lg mx-auto overflow-hidden z-50">
        <div className="modal-header px-4 py-3 bg-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button className="modal-close text-gray-500 hover:text-gray-800 focus:outline-none" onClick={onClose}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="modal-body p-4 text-black">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Footerg({ children }: any) {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <MountainIcon className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Seta Corp</span>
        </div>
        <nav className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link href="/pp" className="hover:underline" prefetch={false}>
            Política de Privacidade
          </Link>
          <Link href="/tos" className="hover:underline" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="/contato" className="hover:underline" prefetch={false}>
            Fale Conosco
          </Link>
        </nav>
      </div>
    </div>
  );
}

export function Avatar({ children }:any) {
  return <div className="avatar">{children}</div>;
}

export function AvatarImage({ src, alt }: any) {
  return <img src={src} alt={alt} className="size-16 hover:size-32 rounded-full object-cover" />;
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
    "name": "Gabriel Martins",
    "position": "Diretor de Marketing, TechBiz Solutions",
    "avatar": "/avatar1.png",
    "testimonial": "A parceria com a Seta Corp foi fundamental para alcançarmos nossos objetivos de crescimento. Seu expertise em tecnologia e compromisso com a excelência são incomparáveis."
  },
  {
    "name": "Reginaldo Costa",
    "position": "CEO, Energia Solar Brasil",
    "avatar": "/avatar2.png",
    "testimonial": "Estamos muito satisfeitos com a colaboração da Seta Corp. Suas soluções inovadoras e suporte contínuo têm impulsionado nossa posição no mercado de energia solar."
  },
  {
    "name": "Leonardo Oliveira",
    "position": "Gerente de Operações, BioFarmaTech",
    "avatar": "/avatar3.png",
    "testimonial": "A equipe da Seta Corp demonstrou um compromisso excepcional com a qualidade e prazo de entrega. Eles são verdadeiros parceiros estratégicos para nossa empresa."
  }
];

