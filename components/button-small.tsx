import { ReactNode } from "react";

type ButtonSmallStyleProps = {
  children: ReactNode;
};

export default function ButtonSmall({ children }: ButtonSmallStyleProps) {
  return (
    <button className="w-fit cursor-pointer whitespace-nowrap rounded-lg bg-secondary-teal px-10 py-2.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-teal">
      {children}
    </button>
  );
}
