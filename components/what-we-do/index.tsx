import React, { useRef } from "react";

export function WhatWeDo() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <section>
      <div className="grid grid-rows-1 md:grid-cols-4">
        <div className="hidden w-full h-48 justify-center items-center lg:flex lg:mt-24">
          <lottie-player
            id="outerProtector"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/covid-19-protect.json"
            style={{ width: "300px", height: "250px" }}
          ></lottie-player>
        </div>
        <div className="w-full md:col-span-4 pb-16 lg:col-span-2">
          <h3 className="text-center text-white">Quem é a Biovitoria?</h3>
          <h1 className="text-center text-5xl font-padauk font-semibold">
            O que fazemos
          </h1>

          <p className="pt-8 text-center text-gray-300">
            A <strong>Biovitoria</strong> oferece os serviços de{" "}
            <strong>dedetização</strong> focados para cada tipo de problema e
            individualizados para cada ramo de atuação. Os serviços de
            dedetização, realizados pela Biovitoria, seguem a linha do uso
            racional de praguicídas, manipulação, orientação e controle
            ambiental.
          </p>

          <div className="flex justify-center items-center md:gap-28 lg:hidden flex-row-reverse">
            <div className="hidden md:flex lg:hidden">
              <lottie-player
                id="innerPraga"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="lotties/pestes.json"
                style={{ width: "130px", height: "130px" }}
              ></lottie-player>
            </div>
            <div className="visible lg:hidden">
              <lottie-player
                id="innerProtector"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="lotties/covid-19-protect.json"
                style={{ width: "250px", height: "250px" }}
              ></lottie-player>
            </div>
          </div>

          <p className="xl:pt-4 text-center text-gray-300">
            Nossos profissionais são capacitados a realizar os serviços com
            excelência e dar informações técnicas dos serviços e das pragas,
            orientando os clientes sobre medidas de prevenção e manutenção dos
            serviços.
          </p>
        </div>
        <div className="hidden lg:flex w-full h-48 mt-32 justify-center">
          <lottie-player
            id="outerPraga"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/pestes.json"
            style={{ width: "140px", height: "140px" }}
          ></lottie-player>
        </div>
      </div>
    </section>
  );
}
