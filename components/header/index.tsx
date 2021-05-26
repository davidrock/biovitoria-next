export default function Header() {
  return (
    <div className="h-28 w-screen">
      <div className="container flex justify-between mx-auto">
        <div className="flex h-28 w-80 items-center justify-start">
          <img src="logo.png" alt="biovitoria" />
        </div>
        <div className="flex items-center">
          <ul className="inline-block">
            <li className="inline-block p-4">Home</li>
            <li className="inline-block p-4">Quem somos</li>
            <li className="inline-block p-4">Serviços</li>
            <li className="inline-block p-4">Parceiros</li>
            <li className="inline-block p-4">Contato</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
