import React, { useRef } from "react";

export function OurServices() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <section>
      <div className="w-full p-4 grid grid-rows-1 grid-cols-2">
        <div className="flex justify-center">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/pestes.json"
            style={{ width: "300px", height: "300px" }}
          ></lottie-player>
        </div>
        <div className="flex justify-start">
          <div>
            <h3 className="text-center text-white">
              Quem é a Biovitoria?
            </h3>
            <h1 className="text-center text-5xl font-padauk font-semibold">
              O que fazemos
            </h1>

            <p className="pt-8 text-center text-gray-300">
              A <strong>BIOVITORIA</strong> oferece os serviços de{" "}
              <strong>dedetização</strong> focados para cada tipo de problema e
              individualizados para cada ramo de atuação. Os serviços de
              dedetização, realizados pela BIOVITORIA, seguem a linha do uso
              racional de praguicídas, manipulação, orientação e controle
              ambiental.
            </p>
            <p className="pt-4 text-center text-gray-300">
              Nossos profissionais são capacitados a realizar os serviços com
              excelência e dar informações técnicas dos serviços e das pragas,
              orientando os clientes sobre medidas de prevenção e manutenção dos
              serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
