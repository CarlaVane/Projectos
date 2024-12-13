import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/tar.png";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Por favor, insira um termo de busca.");
      return;
    }
    alert(`Você pesquisou por: ${searchTerm}`);
  };

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-3xl font-bold">
          <a href="/">
            <img src={logo} alt="Logo Kero" className="h-16" />
          </a>
        </div>

        <nav className="space-x-6 text-gray-800">
          <a href="/" className="text-xl hover:text-primary transition-colors">
            Home
          </a>
          <a
            href="/produtos"
            className=" text-xl hover:text-primary transition-colors"
          >
            Produtos
          </a>
          <a
            href="/promocoes"
            className=" text-xl hover:text-primary transition-colors"
          >
            Promoções
          </a>
          <a
            href="/sobre"
            className=" text-xl hover:text-primary transition-colors"
          >
            Sobre
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-20 py-2 rounded-full border border-gray-50 focus:ring focus: shadow-sm focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}></button>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="/login"
            className="hover:text-primary text-xl transition-colors"
          >
            Login/Registro
          </a>
          <a
            href="/carrinho"
            className="hover:text-primary flex items-center transition-colors"
          >
            <FaShoppingCart className="text-2xl" />
            <span className="ml-1">(0)</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
