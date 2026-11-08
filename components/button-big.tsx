import { ReactNode } from "react";

type ButtonBigStyleProps = {
  children: ReactNode;
};

export default function ButtonBig({ children }: ButtonBigStyleProps) {
  return (
    <button className="bg-secondary-teal px-7 py-3.5 rounded-lg text-white cursor-pointer text-centers w-full">
      {children}
    </button>
  );
}
