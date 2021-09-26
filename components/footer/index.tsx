export default function Footer() {
  return (
    <div className='grid grid-flow-row gap-2 sm:grid-cols-2 lg:grid-flow-col justify-center md:justify-between items-center mb-16 xl:mb-0'>
      <div className='flex flex-col items-center justify-start'>
        <p className='text-xl'>Telefones</p>
        <p>
          <a href='tel:2730338700' className='text-xl'>
            Tel:(27) 3033-8700
          </a>
        </p>
        <p>
          <a href='tel:27996688700' className='text-xl'>
            Cel:(27) 99668-8700
          </a>
        </p>
        <p className='text-2xl'>Fax:(27) 3534-6270</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-8'>
        <p className='text-xl'>Emails</p>
        <p>
          <a href='mailto:contato@biovitoria.com.br' className='text-xl'>
            contato@biovitoria.com.br
          </a>
        </p>
        <p>
          <a href='mailto:biovitoria@biovitoria.com.br' className='text-xl'>
            biovitoria@biovitoria.com.br
          </a>
        </p>
      </div>
      <div className='flex gap-4 mt-8 lg:mt-0 justify-center'>
        <a href='https://www.instagram.com/biovitoria7/' target='blank'>
          <img src='icons/instagram.svg' width='40' alt='instagram' />
        </a>
        <a href='https://www.facebook.com/biovitoriaes' target='blank'>
          <img src='icons/facebook.svg' width='40' alt='biovitoria' />
        </a>
        <a
          href='https://www.youtube.com/channel/UCXe-ySvFJ4ywi6zFcgGflpw'
          target='blank'>
          <img src='icons/youtube.svg' width='40' alt='youtube' />
        </a>
        <a
          href='https://wa.me/5527996688700?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!'
          target='blank'>
          <img src='icons/whatsapp.svg' width='40' alt='youtube' />
        </a>
      </div>
      <div className='flex justify-center items-center my-8 lg:mt-0'>
        <img src='icons/selo.png' width='150' alt='selo' />
      </div>
    </div>
  );
}
