import React from "react";
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
  const clientsReviews = [
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
    // {
    //   name: "Maiana",
    //   location: "Florianópolis, SC",
    //   review:
    //     "Caraíva é incrível e o transfer fez nossa experiencia muito melhor! O Gabriel foi muito solicito, educado e claro na comunicação enquanto o Evandro, nosso motorista foi extremamente simpático, confiável, prudente e educado também! Nos deu várias recomendações ótimas de Caraíva e foi sempre muito pontual! Recomendaria mil vezes, viajei com uma amiga e amamos a experiencia!",
    //   image: { src: MaianaAvatar.src },
    // },
  ];

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
          <div className="flex gap-3 mt-[50px] max-lg:justify-center">
            <a href="">
              <img src={ArrowLeft.src} alt="" className="w-[40px] h-[40px]" />
            </a>
            <a href="">
              <img src={ArrowRight.src} alt="" className="w-[40px] h-[40px]" />
            </a>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap max-2xl:justify-center max-2xl:mt-8 items-center">
          {clientsReviews.map((review, index) => (
            <div
              className="bg-white max-w-[350px] py-5 px-7 rounded-xl flex flex-col justify-between h-fit"
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
          ))}
        </div>
      </div>
    </section>
  );
}
