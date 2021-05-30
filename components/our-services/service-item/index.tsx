type ServiceItemProps = {
  title: string;
  children: React.ReactNode;
  iconUrl: string;
  alt?: string;
};

export function ServiceItem(props: ServiceItemProps) {
  return (
    <div className="grid grid-flow-row gap-2 justify-self-start content-start">
      <div className="w-full">
        <img src={props.iconUrl} className="w-16 h-16" alt={props.alt} />
      </div>
      <h2 className="font-bold text-xl">{props.title}</h2>
      <div className="font-padauk">{props.children}</div>
    </div>
  );
}
