import React from "react";
import privativoCasal from "../assets/privativo-casal.png";
import familiaGruposPequenos from "../assets/familias-grupos-pequenos.png";
import grupoMediosGrandes from "../assets/grupo-medios-grandes.png";
import servicoCasamento from "../assets/transfer-casamento.png";
import ButtonCTA from "./ui/ButtonCTA";

export default function OurServicesDetails() {
  return (
    <section className="mx-auto max-w-[1440px] px-[100px] max-md:px-[20px] my-30 flex flex-col gap-12">
      <h1 className="text-title-2 max-md:text-mobile-title-1 max-lg:text-center font-bold max-lg:max-w-[400px] max-xl:mx-auto">
        Simplifique sua viagem com os nossos serviços
      </h1>
      <div className="flex justify-between items-center gap-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-5">
        <div className="w-[500px] lg:w-[500px]">
          <img
            src={privativoCasal.src}
            alt=""
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </div>
        <div>
          <h4 className="text-title-3 max-lg:text-mobile-title-2 font-bold max-lg:text-center">
            Privativo individual ou casal
          </h4>
          <p className="text-subtitle-2 max-lg:text-mobile-subtitle-2 max-lg:text-center max-lg:max-w-[350px] mb-5">
            Traslados rápidos e confortáveis entre aeroporto, hotéis e resorts
            de Porto Seguro.
          </p>
          <div className="lg:hidden">
            <ButtonCTA
              text="Agendar Transfer"
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row-reverse items-center gap-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-5">
        <div className="w-[500px] lg:w-[500px]">
          <img
            src={familiaGruposPequenos.src}
            alt=""
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </div>
        <div>
          <h4 className="text-title-3 max-lg:text-mobile-title-2 font-bold max-lg:text-center">
            Famílias e grupos pequenos
          </h4>
          <p className="text-subtitle-2 max-lg:text-mobile-subtitle-2 max-lg:text-center max-lg:max-w-[350px] mb-5">
            Veículos espaçosos para até 6 pessoas, com segurança e comodidade.
          </p>
          <div className="lg:hidden">
            <ButtonCTA
              text="Agendar Transfer"
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-5">
        <div className="w-[500px] lg:w-[500px]">
          <img
            src={grupoMediosGrandes.src}
            alt=""
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </div>
        <div>
          <h4 className="text-title-3 max-lg:text-mobile-title-2 font-bold max-lg:text-center">
            Grupos médios e grandes
          </h4>
          <p className="text-subtitle-2 max-lg:text-mobile-subtitle-2 max-lg:text-center max-lg:max-w-[350px] mb-5">
            Vans para grupos grandes e eventos corporativos.
          </p>
          <div className="lg:hidden">
            <ButtonCTA
              text="Agendar Transfer"
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row-reverse items-center gap-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-5">
        <div className="w-[500px] lg:w-[500px]">
          <img
            src={servicoCasamento.src}
            alt=""
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </div>
        <div>
          <h4 className="text-title-3 max-lg:text-mobile-title-2 font-bold max-lg:text-center">
            Casamentos e ventos fechados
          </h4>
          <p className="text-subtitle-2 max-lg:text-mobile-subtitle-2 max-lg:text-center max-lg:max-w-[350px] mb-5">
            Transfer para casamentos e cobertura de transfer para casamentos e
            cerimônias especiais.
          </p>
          <div className="lg:hidden">
            <ButtonCTA
              text="Agendar Transfer"
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
