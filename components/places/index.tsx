import React from "react";
import { useRef } from "react";

export default function Places() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="grid grid-rows-1 md:grid-cols-2">
      <div className="flex justify-center w-72 h-72 xl:w-96 xl:h-96">
        <lottie-player
          id="es"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="lotties/es-animated.json"
        ></lottie-player>
      </div>
      <div className="flex items-center text-center text-biovitoria font-semibold text-xl md:text-left lg:text-center xl:text-2xl">
        Somos uma dedetizadora localizada em Vila Velha.
        <br />
        <br />
        Atendemos toda a Grande Vitória. <br />
        Atendemos em Vitória, Vila Velha, Serra, Cariacica, Campo Grande, Viana,
        Guarapari e outras cidades do Espírito Santo.
      </div>
    </div>
  );
}
