import React from "react";
import ButtonCTA from "./ui/ButtonCTA";

export default function Footer() {
  return (
    <div className="mx-auto max-w-[1440px] px-[100px] max-md:px-[20px]">
      <footer className="bg-gradient-to-r from-black via-[#424242] to-black text-[#FAFAFA] mb-10 py-14 px-10 flex flex-col gap-10 rounded-[40px] mt-20">
        <div className="flex justify-between max-md:flex-col max-md:gap-10">
          <div>
            <h4 className="text-subtitle-1 mb-3">GPS Transfer</h4>
            <p className="text-text-1">Porto Seguro, Bahia, Brasil</p>
          </div>
          <div>
            <p className="text-button-1 mb-3">Contato</p>
            <ul className="text-text-2 flex flex-col gap-3">
              <a href="">
                <li>Telefone: (73) 99834-4769</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-button-1 mb-3">Siga-nos</p>
            <a
              href="https://www.instagram.com/gpstransfer/"
              className="text-text-2"
            >
              Instagram
            </a>
            <a
              href="https://www.tripadvisor.com.br/Attraction_Review-g616327-d25427668-Reviews-GPS_Transfer-Arraial_d_Ajuda_Porto_Seguro_State_of_Bahia.html"
              className="text-text-2"
            >
              TripAdvisor
            </a>
          </div>
          <div className="max-w-[231px]">
            <p className="text-subtitle-1 font-medium">
              Estamos disponíveis o tempo todo. Entre em contato conosco hoje
              mesmo!
            </p>
            <div className="mt-5">
              <ButtonCTA
                text="Orçamento"
                href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
              />
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#FAFAFA] flex justify-between flex-wrap">
          <p className="text-text-2 mt-9">
            {new Date().getFullYear()} GPS Transfer. Todos os direitos
            reservados.
          </p>
          <p className="text-text-2 mt-9 ">
            Desenvolvido por{" "}
            <a
              href="https://github.com/alencarfreire"
              className="text-blue-500 font-semibold"
            >
              Vínicius Freire.
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
