import React, { useRef } from "react";

export default function About() {
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div>
      <h1 className="text-center text-5xl font-padauk font-semibold text-biovitoria mb-20">Quem Somos</h1>
      <div className="grid grid-flow-row md:grid-cols-2 justify-center">
        <div className="grid md:grid-flow-row w-72 h-72 xl:w-96 xl:h-96 lg:justify-self-center">
          <div className="">
            <lottie-player
              id="group"
              autoplay
              loop
              mode="normal"
              src="lotties/grupo.json"
            ></lottie-player>
          </div>
          <div className="hidden md:flex">
            <lottie-player
              id="handshake"
              autoplay
              loop
              mode="normal"
              src="lotties/handshake.json"
            ></lottie-player>
          </div>
          <div className="hidden md:flex">
            <lottie-player
              id="paciente"
              autoplay
              loop
              mode="normal"
              src="lotties/patient-successfully-added.json"
            ></lottie-player>
          </div>
        </div>
        <div className="grid grid-flow-row text-biovitoria text-xl">
          <p className="font-bold">
            Mais de 10 Anos no Mercado
            <br /> Atendimento Personalizado <br />
            Profissionais Qualificados
          </p>
          <br />
          <p>
            Temos atendimento personalizado e diferenciado, Equipamentos de
            última geração; Ética; Garantia; Orçamento sem compromisso;
            Pontualidade; Preços competitivos contando com especialistas e
            técnicos treinados e indentificados para a execução dos serviços. o
            maior aval de nossa competência pode ser comprovado pelos nossos
            clientes.
          </p>
          <br />
          <h1 className="font-extrabold">Missão</h1>
          <br />
          <p>
            Através da prestação de serviços em controle de pragas urbanas,
            promover o bem-estar e a melhoria da qualidade de vida de nossos
            clientes respeitando o meio ambiente e preservando as condições
            naturais dos ambientes tratados.
          </p>
          <br />
          <h1 className="font-extrabold">Visão</h1>
          <br />
          <p>
            Ser uma empresa referência em qualidade na prestação de serviços de
            controle de pragas urbanas e higienização de caixas d'água.
          </p>
          <br />
          <h1 className="font-extrabold">Compromisso</h1>
          <br />
          <p>
            Asseguramos a qualidade de nossos produtos e serviços; promovemos de
            forma responsável e contínua a saúde, a segurança, a preservação do
            meio ambiente e o desenvolvimento profissional, ético e social
            visando a satisfação e o contentamento de nossos clientes através da
            qualidade de nossa prestação de serviço.
          </p>
          <div className="mb-20"></div>
        </div>
      </div>
    </div>
  );
}
