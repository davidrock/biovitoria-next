import { RiHomeLine, RiStarFill } from "react-icons/ri";
import { IoAppsOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FcCustomerSupport } from "react-icons/fc";

export default function Header() {
  return (
    <div className="xl:h-28 w-screen">
      <div className="container grid grid-flow-row xl:flex xl:justify-between mx-auto">
        <div className="grid grid-flow-row xl:flex px-16 py-4 md:px-32 xl:p-0 xl:h-28 xl:w-80 items-center justify-center xl:justify-start">
          <img src="logo.png" alt="biovitoria" className="w-80" />
        </div>
        <div className="hidden grid-flow-row xl:flex xl:items-center">
          <ul className="inline-block">
            <a href="">
              <li className="inline-block p-4">Home</li>
            </a>
            <a href="">
              <li className="inline-block p-4">Quem somos</li>
            </a>
            <a href="">
              <li className="inline-block p-4">Serviços</li>
            </a>
            <a href="">
              <li className="inline-block p-4">Parceiros</li>
            </a>
            <a href="">
              <li className="inline-block p-4">Contato</li>
            </a>
          </ul>
        </div>
        <div className="xl:hidden rounded-sm shadow-2xl fixed z-10 bg-white bottom-0 flex h-16 lg:h-24 w-full justify-center items-center">
          <div className=" grid grid-flow-col gap-2 w-full">
            <div className="flex justify-center">
              <RiHomeLine size="40" />
            </div>
            <div className="flex justify-center">
              <RiStarFill size="40" />
            </div>
            <div className="flex justify-center">
              <IoAppsOutline size="40" />
            </div>
            <div className="flex justify-center">
              <FaPeopleCarry size="40" />
            </div>
            <div className="flex justify-center">
              <FcCustomerSupport size="40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
