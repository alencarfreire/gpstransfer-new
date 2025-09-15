import React from 'react';
import ServiceRegionImage from '../assets/regiaodeatendimento.svg';

export default function ServiceRegion() {
  return (
    <section className="py-20">
      <h2 className="text-title-2 leading-[120%] font-bold mb-14">
        Região de atendimento
      </h2>
      <img src={ServiceRegionImage.src} alt="" />
    </section>
  );
}
