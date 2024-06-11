/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { redirect } from "next/dist/server/api-utils";
import { Avatar, AvatarImage, CloudIcon, CodeIcon, LearnMore, MountainIcon, TabletsIcon, Testimonials, testimonialsData } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <MountainIcon className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Seta Corp</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Início
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Produtos
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Depoimentos
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contato
            </Link>
          </nav>
          <button className="hidden md:inline-flex">Comece Agora</button>
        </div>
      </header>
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
              <img src="/alternativecorp.png" width={400} height={400} alt="Seta Corp" className="w-full max-w-md" />
            </div>
          </div>
        </section>
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
        <section id="testimonials" className="bg-gray-100 py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-4 text-black">
              Depoimentos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">O Que Nossos Clientes Dizem</h2>
          </div>
          <Testimonials></Testimonials>
        </div>
      </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <MountainIcon className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Seta Corp</span>
          </div>
          <nav className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Termos de Serviço
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Fale Conosco
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}