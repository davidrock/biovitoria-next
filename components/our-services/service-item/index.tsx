type ServiceItemProps = {
  title: string;
  children: React.ReactNode;
  iconUrl: string;
  alt?: string;
};

export function ServiceItem(props: ServiceItemProps) {
  return (
    <div className="grid grid-flow-row gap-2 justify-self-start content-start">
      <div className="w-full flex justify-center md:justify-start">
        <img src={props.iconUrl} className="w-16 h-16" alt={props.alt} />
      </div>
      <div className="font-semibold text-xl flex justify-center md:justify-start">
        {props.title}
      </div>
      <div className="font-padauk text-center font-light text-sm md:text-left">{props.children}</div>
    </div>
  );
}
