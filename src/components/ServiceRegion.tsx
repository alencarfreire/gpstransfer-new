import React from 'react';
import ServiceRegionImage from '../assets/regiaodeatendimento.svg';
import MapBahiaMobile from '../assets/mapabahiamobile.svg';

export default function ServiceRegion() {
  return (
    <section className="py-20">
      <h2 className="text-title-2 leading-[120%] font-bold mb-14 max-md:text-mobile-title-2 max-md:text-center">
        Região de atendimento
      </h2>
      <img src={ServiceRegionImage.src} alt="" className="hidden lg:block" />
      <div className="flex justify-center lg:hidden">
        <img src={MapBahiaMobile.src} alt="" className="w-full" />
      </div>
    </section>
  );
}
