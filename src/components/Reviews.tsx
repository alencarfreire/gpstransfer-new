import React, { useState, useEffect } from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import Quote from "../assets/quote.svg";
import BrunaAvatar from "../assets/bruna-avatar.svg";
import PauloAvatar from "../assets/paulo-avatar.svg";
import MaianaAvatar from "../assets/maiana-avatar.jpg";

interface Review {
  name: string;
  location: string;
  review: string;
  image: { src: string };
}

export default function Reviews() {
  const clientsReviews: Review[] = [
    {
      name: "Maisa Brandão",
      location: "Bauru, SP",
      review:
        "Super recomendo a GPS Transfer! O condutor Uiris foi pontual, extremamente simpático, educado e dirigiu com muita segurança durante todo o trajeto de Outeiro das Brisas até o aeroporto de Porto Seguro. O carro que me buscou era muito bom, com bancos de couro, ar-condicionado e muito limpo. Além disso, dentre todas as empresas que cotei, essa foi a que ofereceu o melhor preço. Fiz o trajeto sozinha e tudo ocorreu exatamente como combinado. Excelente serviço do início ao fim!",
      image: { src: BrunaAvatar.src },
    },
    {
      name: "Paulo Sousa",
      location: "Brasilia, DF",
      review:
        "Serviço de transfer executado com perfeição. Sem atrasos, carros limpos e motoristas educados e atenciosos. Estão de parabéns!!!",
      image: { src: PauloAvatar.src },
    },
    {
      name: "Maiana",
      location: "Florianópolis, SC",
      review:
        "Caraíva é incrível e o transfer fez nossa experiencia muito melhor! O Gabriel foi muito solicito, educado e claro na comunicação enquanto o Evandro, nosso motorista foi extremamente simpático, confiável, prudente e educado também! Nos deu várias recomendações ótimas de Caraíva e foi sempre muito pontual! Recomendaria mil vezes, viajei com uma amiga e amamos a experiencia!",
      image: { src: MaianaAvatar.src },
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | "none">("none");

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handlePrevious = () => {
    setDirection("left");
    setStartIndex(
      (prev) => (prev - 1 + clientsReviews.length) % clientsReviews.length
    );
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 1) % clientsReviews.length);
  };

  // Calcula os índices dos reviews visíveis
  const visibleIndices = isMobile
    ? [startIndex]
    : [startIndex, (startIndex + 1) % clientsReviews.length];

  // Aplica animação apenas nos reviews visíveis
  const getAnimationClass = () => {
    if (direction === "left") return "animate-slide-from-left";
    if (direction === "right") return "animate-slide-from-right";
    return "";
  };

  return (
    <section className="bg-gradient-to-r from-black via-[#424242] to-black mt-[120px] mb-20">
      <div className="mx-auto max-w-[1440px] px-[100px] max-md:px-[20px] flex py-40 justify-between flex-wrap max-lg:justify-center">
        <div className="text-white max-w-[397px]">
          <h2 className="text-title-2 font-bold mb-6 max-md:text-center max-md:text-mobile-title-1 max-lg:text-center">
            Seu parceiro de viagem confiável
          </h2>
          <p className="text-subtitle-2 font-medium text-balance max-lg:text-center max-md:text-mobile-subtitle-1">
            Oferecemos uma gama completa de soluções de transfer projetadas para
            tornar sua viagem perfeita e inesquecívei
          </p>
          <p className="text-[10px]">
            Avaliações extraídas do
            <a
              href="https://www.tripadvisor.com.br/Attraction_Review-g616327-d25427668-Reviews-GPS_Transfer-Arraial_d_Ajuda_Porto_Seguro_State_of_Bahia.html"
              className="text-green-600 font-bold"
            >
              TripAdvisor
            </a>
          </p>
          <div className="flex gap-3 mt-[50px] max-md:justify-center">
            <button
              onClick={handlePrevious}
              className="transition-transform hover:scale-110 focus:outline-none"
            >
              <img
                src={ArrowLeft.src}
                alt="Anterior"
                className="w-[40px] h-[40px]"
              />
            </button>
            <button
              onClick={handleNext}
              className="transition-transform hover:scale-110 focus:outline-none"
            >
              <img
                src={ArrowRight.src}
                alt="Próximo"
                className="w-[40px] h-[40px]"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap max-md:justify-center max-md:mt-8 items-center overflow-hidden">
          {clientsReviews.map((review, index) =>
            visibleIndices.includes(index) ? (
              <div
                className={`bg-white max-w-[350px] py-5 px-7 rounded-xl flex flex-col justify-between h-fit
                  transition-all duration-500 ease-in-out opacity-100 scale-100 ${getAnimationClass()}`}
                key={index}
              >
                <div>
                  <img src={Quote.src} alt="" className="w-[24px] h-[24px]" />
                  <p className="text-balance mt-4">{review.review}</p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                  <img
                    src={review.image.src}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div>
                    <p className="text-text-1">{review.name}</p>
                    <p className="text-text-2 text-[#454444]">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
