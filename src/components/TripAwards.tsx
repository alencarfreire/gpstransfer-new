import React from 'react';
import TripAdvisor from '../assets/tripadvisor.png';

export default function TripAwards() {
  return (
    <section className="flex justify-between items-center gap-20 p-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-title-2 leading-[120%] font-bold">
          Travelers’ Choice Awards
        </h2>
        <p className="text-subtitle-2 font-medium text-gray-dark">
          A GPS Transfer foi reconhecida com o prêmio Travelers' Choice do
          TripAdvisor. Esse prêmio destaca as empresas que recebem
          consistentemente ótimas avaliações dos viajantes, colocando-as entre
          as 10% melhores do mundo.
        </p>
      </div>
      <img src={TripAdvisor.src} alt="TripAdvisor Travales Choice" />
    </section>
  );
}
