import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-[#424242] to-black text-[#FAFAFA] mb-10 py-14 px-10 flex flex-col gap-10 rounded-[40px]">
      <div className="flex justify-between">
        <div>
          <h4 className="text-subtitle-1 mb-3">GPS Transfer</h4>
          <p className="text-text-1">Porto Seguro, Bahia, Brasil</p>
        </div>
        <div>
          <p className="text-button-1 mb-3">Contato</p>
          <ul className="text-text-2 flex flex-col gap-3">
            <a href="">
              <li>Email: contato@gpstransfer.com</li>
            </a>
            <a href="">
              <li>Telefone: (77) 99999-9999</li>
            </a>
            <a href="">
              <li>WhatsApp: (77) 99999-9999</li>
            </a>
          </ul>
        </div>
        <div>
          <p className="text-button-1 mb-3">Siga-nos</p>
          <a
            href="https://www.instagram.com/gpstransfer/"
            className="text-text-2"
          >
            Instagram
          </a>
        </div>
        <div className="max-w-[231px]">
          <p className="text-subtitle-1 font-medium">
            Estamos disponíveis o tempo todo. Entre em contato conosco hoje
            mesmo!
          </p>
        </div>
      </div>
      <div className="border-t-[1px] border-[#FAFAFA]">
        <p className="text-text-2 mt-9">
          {new Date().getFullYear()} GPS Transfer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
