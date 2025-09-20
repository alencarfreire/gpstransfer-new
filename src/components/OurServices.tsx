import React from "react";
import OurServicesImage from "../assets/ourservices.jpg";
import ButtonCTA from "./ui/ButtonCTA";

export default function OurServices() {
  return (
    <section className="flex justify-between items-center gap-20 py-30 max-md:py-10 max-md:flex-wrap max-md:px-0 max-md:gap-10 max-md:justify-center">
      <div className="flex flex-col gap-6 max-md:text-center max-w-[724px] max-md:items-center">
        <h2 className="text-title-2 leading-[120%] font-bold max-md:text-mobile-title-2">
          Nossos serviços
        </h2>
        <p className="text-subtitle-2 font-medium text-gray-dark max-md:text-mobile-subtitle-1">
          Oferecemos traslados privativos com conforto, segurança e pontualidade
          na região de Porto Seguro. Atendemos desde viajantes individuais até
          grupos pequenos e grandes. Seja translados entre aeroporto, hotéis ou
          destinos turísticos, nosso compromisso é proporcionar praticidade e
          excelência em cada trajeto.
        </p>
        <ButtonCTA text="Reservar Agora" href="/" />
      </div>
      <div className="max-w-[500px]">
        <img
          src={OurServicesImage.src}
          alt="TripAdvisor Travales Choice"
          className="rounded-2xl w-full"
        />
      </div>
    </section>
  );
}
