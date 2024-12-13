import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
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
