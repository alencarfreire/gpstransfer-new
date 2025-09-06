import React from 'react';

export default function Header() {
  return (
    <header className="max-w-screen-lg mt-10 mx-auto flex justify-between items-center bg-gradient-to-r from-black via-[#424242] to-black text-[#FAFAFA] py-6 px-10 rounded-[60px]">
      <nav>
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
      <div className="flex items-center justify-center font-extrabold text-xl">
        <span>GPS Transfer</span>
      </div>
      <nav>
        <ul className="flex gap-8">
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
    </header>
  );
}
