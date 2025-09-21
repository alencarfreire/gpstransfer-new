import React from "react";
import imageHero from "../assets/image-hero.png";
import ButtonCTA from "./ui/ButtonCTA";

export default function Hero() {
  return (
    <div className="mx-auto max-w-[1440px] px-[100px] max-md:px-[20px]">
      <section className="mt-20 mb-10 max-sm:mt-8">
        <div className="flex justify-between gap-10 max-md:gap-2 items-start max-md:flex-col">
          <h1 className="text-7xl leading-20 font-bold text-balance max-lg:text-5xl max-lg:leading-12 max-lg:font-black max-lg:text-center">
            Seu transfer exclusivo no aeroporto de Porto Seguro
          </h1>
          <div className="mt-5 flex flex-col items-start gap-6 max-md:items-center">
            <p className="text-2xl max-md:text-mobile-subtitle-1 max-md:text-center text-gray-dark">
              Evite surpresas, faça sua reserva e o seu transfer privativo
              estará pronto no desembarque.
            </p>
            <ButtonCTA
              text="Fazer Orçamento"
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
            />
          </div>
        </div>
        <div className="mt-10 max-md:mx-4">
          <img
            src={imageHero.src}
            alt="Hero image"
            className="w-full max-h-[540px] rounded-3xl object-cover max-md:h-[280px] max-md:rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
}
