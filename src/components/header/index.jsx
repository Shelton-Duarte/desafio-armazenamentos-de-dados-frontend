import { NavBar } from "./navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-500 to-gray-200 text-white h-20 px-8 text-lg">
      <h1 className="text-2xl font-bold border border-white p-2">
        Desafio de Armazenamento de Dados
      </h1>
      <section className="flex gap-5">
        <NavBar />
      </section>
    </header>
  );
};
