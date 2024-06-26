export function Cards() {
  return (
    <main className="flex-1 py-12 md:py-20 font-Montserrat sans-serif">
      {sectionsData.map((section, index) => (
        <section key={index} className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 rounded-lg bg-whitesmoke py-5 hover:shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{section.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
        </section>
      ))}
    </main>
  );
}

const sectionsData = [
    {
      title: "Nossa História",
      content: "A Seta Corp foi fundada em 2024 com o objetivo de fornecer soluções tecnológicas e inovadoras para todo tipo de empresa. Nosso objetivo é fornecer serviços de alta qualidade que capacitam nossos clientes a alcançar seus objetivos de negócios."
    },
    {
      title: "Nossos Valores",
      content: "Integridade, excelência, inovação e colaboração são os pilares que sustentam nossa empresa. Acreditamos que esses valores são fundamentais para o sucesso a longo prazo e guiam todas as nossas ações e decisões."
    },
    {
      title: "Nossa Equipe",
      content: "Juntos, trabalhamos para fornecer soluções inovadoras e personalizadas que atendam às necessidades de nossos clientes."
    }
];