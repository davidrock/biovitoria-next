import React, { useRef } from "react";

export function OurServices() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <section>
      <div className="w-full p-4 grid grid-rows-1 grid-cols-4">
        <div className="flex justify-start" style={{ marginTop: "57px" }}>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/pestes.json"
            style={{ width: "250px", height: "250px" }}
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
            <p className="pt-4 text-center text-gray-300">
              Nossos profissionais são capacitados a realizar os serviços com
              excelência e dar informações técnicas dos serviços e das pragas,
              orientando os clientes sobre medidas de prevenção e manutenção dos
              serviços.
            </p>
          </div>
        </div>
        <div className="flex justify-start" style={{ marginTop: "-10px" }}>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="lotties/covid-19-protect.json"
            style={{ width: "500px", height: "500px" }}
          ></lottie-player>
        </div>
      </div>
    </section>
  );
}
