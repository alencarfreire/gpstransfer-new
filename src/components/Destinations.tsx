import React from "react";
import arraialdAjuda from "../assets/arraial-d-ajuda.jpg";
import santaCruzCabralia from "../assets/santa-cruz-cabralia.jpg";
import trancoso from "../assets/trancoso.png";
import caraiva from "../assets/caraiva.jpg";
import clubMedTrancoso from "../assets/club-med-trancoso.jpeg";
import aeroporto from "../assets/aeroporto.png";
import portoSeguro from "../assets/porto-seguro.jpeg";
import santoAndre from "../assets/santo-andre-campo-bahia.jpg";

interface Locals {
  name: string;
  description: string;
  imagem: {
    src: string;
  };
}

export default function Destinations() {
  const locals: Locals[] = [
    {
      name: "Arraial d'Ajuda",
      description:
        "Arraial d'Ajuda fica cerca de 10km do Aeroporto e 7km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, conhecida por sua história e praias paradisíacas, é um dos melhores locais de hospedagem da região.",
      imagem: { src: arraialdAjuda.src },
    },
    {
      name: "Club Med Trancoso",
      description:
        "O Club Med Trancoso fica cerca de 30km do Aeroporto e 25km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos. Local de hospegadem de alto padrão, All Inclusive.",
      imagem: { src: clubMedTrancoso.src },
    },
    {
      name: "Trancoso",
      description:
        "Trancoso fica cerca de 35km do Aeroporto e 30km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos seu trajetos mais curtos, porém também possui o trajeto sem balsa, que é cerca de 78km do Aeroporto e 80km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      imagem: { src: trancoso.src },
    },
    {
      name: "Caraíva",
      description:
        "Caraíva fica cerca de 75km do Aeroporto e 80km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos trajetos mais longos, porém também possui o trajeto sem balsa, que é cerca de 130km do Aeroporto e 135km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      imagem: { src: caraiva.src },
    },
    {
      name: "Santa Cruz Cabrália",
      description:
        "Santa Cruz Cabrália fica cerca de 150km do Aeroporto e 155km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos trajetos mais longos, porém também possui o trajeto sem balsa, que é cerca de 220km do Aeroporto e 225km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      imagem: { src: santaCruzCabralia.src },
    },
    {
      name: "Aeroporto de Porto Seguro",
      description:
        "Porto Seguro fica cerca de 100km do Aeroporto e 105km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos trajetos mais longos, porém também possui o trajeto sem balsa, que é cerca de 180km do Aeroporto e 185km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      imagem: { src: aeroporto.src },
    },
    {
      name: "Santo André",
      description:
        "Santo André fica cerca de 120km do Aeroporto e 125km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos trajetos mais longos, porém também possui o trajeto sem balsa, que é cerca de 200km do Aeroporto e 205km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      imagem: { src: santoAndre.src },
    },
    {
      name: "Outro lugar de Porto Seguro?",
      description:
        "Levamos você para qualquer local de Porto Seguro e região. É só entrar em contato, nos falar para onde quer ir e passamos o orçamento.",
      imagem: { src: portoSeguro.src },
    },
  ];
  return (
    <section className="flex flex-wrap gap-6 justify-between">
      {locals.map((local) => (
        <div key={local.name} className="max-w-[600px] max-xl:w-full">
          <img
            src={local.imagem.src}
            alt={local.name}
            className="max-h-[400px] w-full object-cover rounded-2xl mb-5 mt-5 max-md:h-[300px]"
          />
          <h4 className="text-title-3 font-semibold max-md:text-mobile-title-1">
            {local.name}
          </h4>
          <p className="text-text-1 text-balance mb-5">{local.description}</p>
        </div>
      ))}
    </section>
  );
}
