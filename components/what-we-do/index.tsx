import React, { useRef } from "react";

export function WhatWeDo() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <section>
      <div className="w-full xl:pt-16 grid grid-rows-1 xl:grid-cols-4">
        <div className="flex justify-start hidden lg:visible">
          <lottie-player
            id="plages"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/pestes.json"
            style={{ width: "200px", height: "200px" }}
          ></lottie-player>
        </div>
        <div className="flex justify-center col-span-2">
          <div>
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

            <div className="grid justify-center items-center md:gap-28 lg:hidden">
              <div className="hidden md:visible">
                <lottie-player
                  id="plages-2"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  src="lotties/pestes.json"
                  style={{ width: "120px", height: "120px" }}
                ></lottie-player>
              </div>
              <div className="visible xl:visible">
                <lottie-player
                  id="protector-2"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  style={{ width: "250px", height: "250px" }}
                  src="lotties/covid-19-protect.json"
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
        </div>
        <div className="flex justify-start hidden lg:visible">
          <lottie-player
            id="protector-1"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/covid-19-protect.json"
            className="w-4 h-4"
          ></lottie-player>
        </div>
      </div>
    </section>
  );
}
