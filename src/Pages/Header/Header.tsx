import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Importando ícone do carrinho

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Você pesquisou por: ${searchTerm}`);
  };

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Kero</div>

        {/* Barra de Navegação */}
        <nav className="space-x-6">
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
          <a href="/produtos" className="hover:text-gray-600">
            Produtos
          </a>
          <a href="/promocoes" className="hover:text-gray-600">
            Promoções
          </a>
          <a href="/sobre" className="hover:text-gray-600">
            Sobre
          </a>
        </nav>

        {/* Barra de Busca */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Buscar
          </button>
        </div>

        {/* Ícone de Login/Conta e Carrinho */}
        <div className="flex items-center space-x-4">
          {/* Login */}
          <a href="/login" className="hover:text-gray-600">
            <span>Login</span>
          </a>

          {/* Carrinho */}
          <a href="/carrinho" className="hover:text-gray-600 flex items-center">
            <FaShoppingCart className="text-2xl" />
            <span className="ml-1">(0)</span> {/* Mostra o número de itens */}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
