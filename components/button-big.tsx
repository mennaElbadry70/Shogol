import { ReactNode } from "react";

type ButtonBigStyleProps = {
  children: ReactNode;
};

export default function ButtonBig({ children }: ButtonBigStyleProps) {
  return (
    <button className="w-full cursor-pointer rounded-lg bg-secondary-teal px-7 py-3.5 text-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-teal">
      {children}
    </button>
  );
}
