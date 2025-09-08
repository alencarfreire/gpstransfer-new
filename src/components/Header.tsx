import React from 'react';

export default function Header() {
  return (
    <header className="max-w-screen-lg mt-10 mx-auto flex justify-between items-center bg-gradient-to-r from-black via-[#424242] to-black text-[#FAFAFA] py-5 px-10 rounded-[60px] max-md:mx-5">
      <nav className="max-md:hidden">
        <ul className="flex gap-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Serviços</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center font-extrabold text-xl transform translate-x-1.5">
        <span>GPS Transfer</span>
      </div>
      <nav>
        <ul className="flex gap-8 max-md:hidden">
          <li>
            <a href="/">Avaliações</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a
              href="/"
              className="bg-[#4CF419]/50 px-[14px] py-2 rounded-full hover:bg-[#4CF419]/40 transition-colors border-2 border-[#FAFAFA]"
            >
              Reservar
            </a>
          </li>
        </ul>
      </nav>
      <button className="hidden max-md:block">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}
