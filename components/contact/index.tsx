export default function Contact() {
  return (
    <div className=''>
      <h1 className='text-center text-4xl font-padauk font-semibold text-biovitoria mb-5 lg:mb-20'>
        Entre em contato
      </h1>

      <div className='w-full mt-8'>
        <form>
          <div className='grid grid-flow-row'>
            <input
              type='text'
              placeholder='Seu nome'
              className='p-4 border mb-4'
            />
            <input
              type='text'
              placeholder='Seu melhor email'
              className='p-4 border mb-4'
            />
            <select className='p-4 border mb-4 pr-2'>
              <option disabled selected>
                Escolha um assunto
              </option>
              <option>Pedido de orçamento</option>
              <option>Reclamação</option>
              <option>Suporte</option>
            </select>
            <textarea
              cols={40}
              rows={5}
              placeholder='Insira o texto da mensagem'
              className='p-4 border mb-4'></textarea>
          </div>
          <div className='w-full'>
            <button className='bg-yellow-400 py-2 px-8 text-white'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
