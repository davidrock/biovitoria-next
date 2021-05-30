import { ServiceItem } from "./service-item";

export function OurServices() {
  return (
    <div className="w-full text-gray-700">
      <h1 className="text-center text-5xl font-padauk font-semibold">
        Nossos Serviços
      </h1>
      <p className="text-center text-md font-padauk font-semibold mt-4">
        Fazemos dedetização Residencial em Casas, Apartamentos, Condomínios,
        Comercial, Lojas, Escolas, Clinicas, Hotéis e Outros.
      </p>
      <p className="text-center text-md font-padauk font-semibold">
        Soluções eficazes que priorizam a segurança das Pessoas, Animais e do
        Meio Ambiente.
      </p>
      <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-8">
        <ServiceItem iconUrl="icons/baratas.svg" title="Baratas" alt="Baratas">
          Estes insetos podem estar presentes nos mais diversos ambientes,
          infestando os mais diferentes pontos. Somos especialistas em controle
          de baratas, francesinhas, paulistinhas e outras. Dentro de um mesmo
          ambiente teremos diferentes formulações e métodos variados de ações de
          acordo com cada necessidade.
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/formiga2.svg"
          title="Formigas"
          alt="formigas"
        >
          A formiga é um vetor mecânico de várias doenças. Solução adequada para
          controlar o problema da forma rápida e segura na sua casa ou empresa.
        </ServiceItem>
        <ServiceItem iconUrl="icons/traca2.svg" title="Traças" alt="traças">
          A traça pode viver em uma variedade de lugares, incluindo cozinhas,
          banheiros, porões e sótãos. Alimentam-se de papéis, papelões, colas de
          capas de livros entre outros. Trabalhamos com tecnologia de controle
          para estas pragas e outras como Aranhas, Pulgas, Carrapatos, Insetos
          rasteiros, voadores em geral.
        </ServiceItem>
        <ServiceItem iconUrl="icons/rat.svg" title="Desratização" alt="ratos">
          Para o controle de roedores é realizado um conjunto de ações
          fundamentais do controle integrado de pragas urbanas no qual serão
          recomendadas medidas corretivas, medidas preventivas, bem como
          controle químico. O método varia de acordo com a espécie detectada
          (camundongos, ratazanas, ratos de telhado e outros) o local e a
          intensidade da infestação. <br />
          Controle químico:
          <ul className="pl-4 list-disc">
            <li>Iscas Semi Parafinadas</li>
            <li>Porta Iscas</li>
            <li>Granulado</li>
            <li>Pó de Contato</li>
            <li>Placa de cola</li>
          </ul>
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/corona.svg"
          title="Sanitização de ambiente (desinfecção)"
          alt="desinfecção"
        >
          O procedimento de desinfecção ,tem a ação de controlar e diminuir a
          proliferação acelerada de :
          <ul className="pl-4 list-disc">
            <li>Ácaros</li>
            <li>Bactérias</li>
            <li>Fungos</li>
            <li>Vírus</li>
          </ul>
          Com o objetivo de reduzir os agentes causadores de infecções,
          alergias, doenças respiratórias e outros, tornando o ambiente aplicado
          residencial ou comercial mais saudável para a convivência humana
          prezando a qualidade de vida, bem estar e saúde de seus clientes e
          família.
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/protection.svg"
          title="Controle Integrado de Pragas Urbanas"
          alt="controle de pragas urbanas"
        >
          A estratégia do controle integrado de pragas urbanas varia de acordo
          com a espécie , local e a intensidade da infestação. Após avaliação
          técnica será possível distinguir a melhor técnica entre os métodos
          fundamentais do controle integrado. <br />
          Faça já seu contrato de prestação de serviço para sua empresa !
          Supermercado, Shopping, Padaria, Restaurante, Lanchonete , Bares,
          Hotéis, Clínicas, Hospitais, Indústrias, Galpões e outros. <br />
          Tenha comodidade e segurança. Dedetização para cada tipo de problema e
          individualizado para cada ramo de atividade.
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/bug.svg"
          title="Descupinização"
          alt="descupinização"
        >
          Combatemos Cupim de Solo, Cupim de Madeira e Brocas. Imunizamos
          telhados, portas, janelas e móveis. <br />
          Usamos produtos qualificados sem danificar a Madeira. <br />
          Atendimento personalizado e profissionais qualificados
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/bug.svg"
          title="Higienização de Caixas D'água"
          alt="limpeza de caixa d'água"
        >
          A BIOVITORIA efetua a mais completa limpeza e higienização de caixas
          d'água. A limpeza inclui completa desinfecção dos reservatórios com
          produtos adequados que preservam a saúde, além do uso de equipamentos
          modernos. <br />
          Equipamentos:
          <ul className="pl-4 list-disc">
            <li>Macacão Impermeável</li>
            <li>Botas apropriadas</li>
            <li>Luvas Apropriadas</li>
            <li>Bomba de sucção</li>
          </ul>
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/trap.svg"
          title="Armadilhas"
          alt="armadilhas"
        >
          Para o controle de insetos é realizado um trabalho específico com a
          estratégia do controle integrado de pragas urbanas, que após a
          identificação da espécie, local e o nível de infestação, serão
          definidos a melhor técnica para o tratamento.
          <br />
          Uma das mais eficientes armadilhas do mercado, vêm se destacando pela
          incrível eficiência, desing e acabamento. Com apenas 64 mm de
          espessura segue a linha dos modernos equipamentos de plasma.
          Desenvolvida para ambientes que requerem muita atenção e efetividade
          no controle de insetos voadores. As moscas são atraídas pelo raio
          ultra-violeta liberado pela lâmpada e ficam presas na placa de cola na
          parte inferior da armadilha
          <br />
          Trabalhamos com repelente para moscas, mosquitos, pernilongos e
          insetos voadores.
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/scorpion.svg"
          title="Controle de Escorpiões"
          alt="escorpião"
        >
          Para o controle de escorpiões inicialmente é realizado uma avaliação
          técnica para identificação do nível e local da infestação para que
          possa ser definida a melhor medida preventiva e corretiva, além de um
          produto químico especifico para o tratamento da espécie: <br />
          Controle químico:
          <ul className="pl-4 list-disc">
            <li>Pulverização líquida</li>
            <li>Polvilhamento</li>
          </ul>
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/dove.svg"
          title="Controle de Pombos"
          alt="pombos"
        >
          A BIOVITORIA orientará ao cliente qual o melhor método para o controle
          de acordo com a intensidade, local e nível de infestação, definindo as
          melhores medidas corretivas e preventivas. Controle químico:
          <ul className="pl-4 list-disc">
            <li>Repelente</li>
          </ul>
        </ServiceItem>
        <ServiceItem
          iconUrl="icons/certi.svg"
          title="Documentação"
          alt="documentação sanitária"
        >
          A <strong>Biovitoria</strong> emite Certificado de Desinsetização e
          Desratização. FAES.
          <br />
          Tambem Emitimos:
          <ul className="pl-4 list-disc">
            <li>Certificado de Higienização de Caixa D'água</li>
            <li>Memorial Descritivo</li>
            <li>Alvará de Nova Portaria exigido pela Vigilância Sanitária</li>
          </ul>
        </ServiceItem>
      </div>
      <div className="flex justify-center mt-16 font-bold text-biovitoria text-lg">
        Além destes, também realizamos coleta de água para: Análise
        Microbiológica da água e Análise Físioquímica da água
      </div>
    </div>
  );
}
