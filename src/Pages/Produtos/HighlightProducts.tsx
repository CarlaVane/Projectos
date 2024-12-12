function HighProducts() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Produtos em destaque</h2>
        <div className="flex overflow-x-auto space-x-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md p-4 min-w-[200px]"
            >
              <img
                src={`https://via.placeholder.com/200x150?text=Produto+${item}`}
                alt={`Produto ${item}`}
              />
              <h3 className="font-bold mt-2">Produto {item}</h3>
              <p className="text-gray-600">Descrição breve</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HighProducts;
