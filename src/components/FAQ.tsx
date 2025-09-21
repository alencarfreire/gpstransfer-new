import React, { useState } from "react";
import FAQImage from "../assets/faqimage.png";
import Plus from "../assets/plus.svg";

export default function FAQ() {
  // Estado para controlar quais perguntas estão expandidas, inicializando com o primeiro item (índice 0) já aberto
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);

  // Função para alternar a expansão de um item
  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Por que contratar um Transfer de forma atencipada?",
      answer:
        "Garantia de que você será atendido com horário agendado, tranquilidade, atendimento exclusivo e um melhor valor.",
    },
    {
      question:
        "Em Porto Seguro não tem Uber, 99 ou outro aplicativo de transporte?",
      answer:
        "Tem sim, porém com cobertura limitada e vários cancelamentos até conseguir uma corrida. Os aplicativos de corrida funcionam somente no Centro e Orla norte de Porto Seguro, para outros destinos como Arraial d'Ajuda, Club Med, Trancoso e Caraíva, o ideal é contratar um Transfer.",
    },
    {
      question: "Vocês buscam no Hotel ou no Aeroporto pela madrugada?",
      answer:
        "Com certeza. O Transfer é a mesma coisa que uma corrida agendada, o diferencial da GPS Transfer é que cumprimos o horário e os valores já combinados, sem pegadinha no momento do Transfer.",
    },
    {
      question: "Como faço para contratar o Transfer?",
      answer:
        "Entre em contato através do nosso WhatsApp: (73) 99834-4769, informe a data, horário e quantidade de pessoas, local de embarque e destino, em seguida enviaremos uma cotação.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-[100px] max-md:px-[20px] flex flex-col items-center mb-20 gap-10">
      <h2 className="text-title-2 text-center font-bold max-w-[600px] max-md:text-mobile-title-1">
        Ficou com dúvidas? Veja as peguntas frequentes...
      </h2>
      <div className="flex justify-between items-center max-2xl:gap-[100px] gap-[148px] flex-wrap max-md:gap-10 max-xl:justify-center">
        <div className="max-md:w-[300px] w-[400px] max-h-[803px]">
          <img
            src={FAQImage.src}
            alt="FAQ"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="max-md:max-w-[400px] max-w-[589px]">
          {faqData.map((item, index) => (
            <div key={index} className="border-b-[1px] border-[#EEE]">
              <div
                className="p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <p className="text-subtitle-2 max-w-[487px] font-medium">
                  {item.question}
                </p>
                <img
                  src={Plus.src}
                  alt="Plus"
                  className={`w-[24px] h-[24px] transition-transform duration-300 ${
                    expandedItems.includes(index) ? "rotate-45" : ""
                  }`}
                />
              </div>
              <p
                className={`text-text-1 text-[#454444] p-3 overflow-hidden transition-all duration-300 ${
                  expandedItems.includes(index)
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
