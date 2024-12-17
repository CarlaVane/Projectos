import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10  shadow-lg bg-primary">
      <div className="container mx-auto text-lg text-center  text-white">
        <p className="">
          &copy; 2024 Kero. Todos os direitos reservados.
        </p>
        <nav className="flex flex-col space-y-2 mt-2">
          <a href="/" className="hover:text-gray-600">
            Política de Privacidade
          </a>
          <a href="/" className="hover:text-gray-600">
            Termos de Uso
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
