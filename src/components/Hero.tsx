import React from 'react';
import imageHero from '../assets/image-hero.png';

export default function Hero() {
  return (
    <section className="mt-20 max-sm:mt-4">
      <div className="flex justify-between items-center max-md:flex-col">
        <h1 className="text-7xl leading-20 font-bold text-balance max-md:text-mobile-title-1 max-md:leading-9 max-md:text-center">
          Seu transfer exclusivo no aeroporto de Porto Seguro
        </h1>
        <div className="mt-5 flex flex-col items-start gap-10 max-md:items-center">
          <p
            className="text-2xl max-md:text-mobile-subtitle-1 max-md:text-center text-gray-dark
          "
          >
            Evite surpresas, faça sua reserva e o seu transfer privativo estará
            pronto no desembarque.
          </p>
          <a className="bg-[#161616] text-white px-[18px] py-[14px] rounded-full font-semibold text-button-1 flex items-center gap-4 cursor-pointer group">
            Reservar Agora
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-all duration-300"
            >
              <path
                d="M16 19C16 18.258 16.733 17.15 17.475 16.22C18.429 15.02 19.569 13.973 20.876 13.174C21.856 12.575 23.044 12 24 12M24 12C23.044 12 21.855 11.425 20.876 10.826C19.569 10.026 18.429 8.979 17.475 7.781C16.733 6.85 16 5.74 16 5M24 12H0"
                stroke="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-10 max-md:mx-4 mb-50">
        <img
          src={imageHero.src}
          alt="Hero image"
          className="w-full max-h-[540px] rounded-3xl object-cover max-md:h-[280px] max-md:rounded-3xl"
        />
      </div>
    </section>
  );
}
