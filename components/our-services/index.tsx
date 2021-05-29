import { ServiceItem } from "./service-item";

export function OurServices() {
  return (
    <div className="w-full text-gray-700">
      <h1 className="text-center text-5xl font-padauk font-semibold">
        Nossos Serviços
      </h1>
      <div className="grid grid-rows-1 grid-cols-3">
        <ServiceItem />
      </div>
    </div>
  );
}
