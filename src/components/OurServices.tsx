import React from 'react';
import OurServicesImage from '../assets/ourservices.jpg';

export default function OurServices() {
  return (
    <section className="flex justify-between items-center gap-20 py-30">
      <div className="flex flex-col gap-6">
        <h2 className="text-title-2 leading-[120%] font-bold">
          Nossos serviços
        </h2>
        <p className="text-subtitle-2 font-medium text-gray-dark">
          Oferecemos traslados privativos com conforto, segurança e pontualidade
          na região de Porto Seguro. Atendemos desde viajantes individuais até
          grupos pequenos e grandes. Seja translados entre aeroporto, hotéis ou
          destinos turísticos, nosso compromisso é proporcionar praticidade e
          excelência em cada trajeto.
        </p>
      </div>
      <img
        src={OurServicesImage.src}
        alt="TripAdvisor Travales Choice"
        className="max-w-[500px] rounded-2xl"
      />
    </section>
  );
}
