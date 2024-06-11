import Link from "next/link";
import { MountainIcon } from "../components";
import { Cards } from "./components";

export default function component() {
  return (
    <div className="bg-white flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-8 px-4 md:px-6 font-family[Montserrat, sans-serif]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold mb-2">Seta Corp.</h1>
          <p className="text-gray-400 text-lg">Transformando ideias em realidade</p>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-20 font-family[Montserrat, sans-serif]">
        <Cards></Cards>
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
  );
};