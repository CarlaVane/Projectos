import React from "react";

const ProductShowcase: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Nossos Produtos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Produtos na grade */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="border rounded-xl shadow-xl p-4">
              <img
                src={`https://via.placeholder.com/150x150?text=Produto+${item}`}
                alt={`Produto ${item}`}
                className="w-full"
              />
              <h3 className="font-bold mt-2">Produto {item}</h3>
              <p className="text-gray-600">Descrição breve</p>
              <button className="mt-2 bg-primary text-white px-4 py-2 rounded hover: shadow-xl">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
