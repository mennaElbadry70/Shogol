import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  heading: string;
};

export default function ServiceCard({ icon: Icon, heading }: ServiceCardProps) {
  return (
    <div className="flex h-52 w-full flex-col items-center justify-center gap-3 rounded-lg bg-background-white p-3.75 shadow-lg shadow-[#0000001F] sm:h-80 sm:w-81.25">
      <Icon className="size-12 text-secondary-teal" aria-hidden="true" />
      <h3 className="text-lg font-bold text-supporting-blue">{heading}</h3>
    </div>
  );
}
