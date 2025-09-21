import React, { useEffect } from "react";
import MenuMobile from "./ui/MenuMobile";

export default function Header() {
  const [menuHamburger, setMenuHamburger] = React.useState(false);

  useEffect(() => {
    if (menuHamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuHamburger]);

  function handleClick() {
    setMenuHamburger(!menuHamburger);
    console.log("clicou menu hamburguer");
  }

  return (
    <div className="mx-auto max-w-[1440px] px-[100px] max-md:px-[20px]">
      <>
        <MenuMobile
          isOpen={menuHamburger}
          onClose={() => setMenuHamburger(false)}
        />

        <header className="mt-10 max-md:mt-5 mx-auto flex justify-between items-center bg-gradient-to-r from-black via-[#424242] to-black text-[#FAFAFA] py-5 px-10 rounded-[60px]">
          <nav className="max-lg:hidden">
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
                  className="bg-green-600 px-[14px] py-2 rounded-full hover:bg-green-700 transition-colors border-2 border-white text-white font-bold"
                >
                  Reservar
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="hidden max-md:block"
            onClick={handleClick}
            aria-label="Menu"
            aria-expanded={menuHamburger}
          >
            {menuHamburger ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300"
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
            )}
          </button>
        </header>
      </>
    </div>
  );
}
