/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { CloudIcon, CodeIcon, LearnMore, MountainIcon, TabletsIcon, Testimonials, Footerg, HeaderG } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeaderG></HeaderG>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-start justify-center">
              <div className="inline-block bg-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Soluções Tecnológicas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Capacitando empresas com tecnologia inovadora</h1>
              <p className="text-gray-400 mb-8">
                A Seta Corp fornece soluções de tecnologia de ponta para ajudar as empresas a prosperar na era digital. De
                computação em nuvem para desenvolvimento de software personalizado, foram seu parceiro confiável para o sucesso.
              </p>
              <LearnMore></LearnMore>
            </div>
            <div className="flex justify-center">
              <img src="/alternativecorp.png" alt="Seta Corp" className="w-full max-w-md" />
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="bg-white">
          <path fill="#111827" fill-opacity="1" transform="rotate(180 720 90)" d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" data-darkreader-inline-fill=""></path>
        </svg>

        <section id="products" className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium mb-4 text-black">
                Nossos Produtos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Soluções Inovadoras para o Seu Negócio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CloudIcon className="h-12 w-12 mb-4 text-gray-500" />
                <h3 className="text-xl font-bold mb-2 text-black">Soluções em Nuvem</h3>
                <p className="text-gray-500">
                  Aproveite o poder da computação em nuvem para escalar seu negócio e melhorar a eficiência.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CodeIcon className="h-12 w-12 mb-4 text-gray-500" />
                <h3 className="text-xl font-bold mb-2 text-black">Desenvolvimento de Software Personalizado</h3>
                <p className="text-gray-500">Liberte o potencial do seu negócio com soluções de software sob medida.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <TabletsIcon className="h-12 w-12 mb-4 text-gray-500" />
                <h3 className="text-xl font-bold mb-2 text-black">Gestão de Infraestrutura de TI</h3>
                <p className="text-gray-500">Simplifique suas operações de TI e concentre-se no seu negócio principal.</p>
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="bg-white">
          <path fill="#f3f4f6" fill-opacity="1" d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" data-darkreader-inline-fill=""></path>
        </svg>
        <section id="testimonials" className="bg-gray-100 py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-4 text-black">
              Depoimentos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">O Que Nossos Clientes Dizem</h2>
          </div>
          <div>
            <Testimonials></Testimonials>
          </div>
        </div>
      </section>
      </main>
      <Footerg></Footerg>
    </div>
  )
}