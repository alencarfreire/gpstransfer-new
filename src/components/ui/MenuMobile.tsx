import React from "react";

type MenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuMobile({ isOpen, onClose }: MenuMobileProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
      <button
        onClick={onClose}
        className="absolute top-10 right-14 text-white hover:text-green-500 transition-colors"
        aria-label="Fechar menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <nav className="text-white text-xl">
        <ul className="flex flex-col gap-8 items-center">
          <li>
            <span className="text-mobile-title-1 font-bold">GPS Transfer</span>
          </li>
          <li>
            <a
              href="/"
              className="hover:text-green-500 transition-colors"
              onClick={onClose}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              className="hover:text-green-500 transition-colors"
              onClick={onClose}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#avaliacoes"
              className="hover:text-green-500 transition-colors"
              onClick={onClose}
            >
              Avaliações
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-green-500 transition-colors"
              onClick={onClose}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20agendar%20um%20transfer%20privativo..."
              className="bg-green-600 px-[14px] py-2 rounded-full hover:bg-green-700 transition-colors border-2 border-white text-white font-bold"
              onClick={onClose}
            >
              Agendar Privativo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
