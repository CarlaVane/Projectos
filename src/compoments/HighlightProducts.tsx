import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const HighProducts: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8 px-5">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Produtos em destaque
        </h2>
        {/* Carrossel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
                <img
                  src={`https://via.placeholder.com/200x150?text=Produto+${item}`}
                  alt={`Produto ${item}`}
                  className="w-full"
                />
                <h3 className="font-bold mt-2">Produto {item}</h3>
                <p className="text-gray-600">Descrição breve</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Div para o vídeo promocional */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Conheça mais sobre o Kero</h2>
          <div className="relative w-full max-w-4xl mx-auto aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/CoDBvV3S460"
              title="Vídeo Promocional do Kero"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighProducts;
