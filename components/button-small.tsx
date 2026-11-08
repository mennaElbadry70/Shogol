import { ReactNode } from "react";

type ButtonSmallStyleProps = {
  children: ReactNode;
};

export default function ButtonSmall({ children }: ButtonSmallStyleProps) {
  return (
    <button className="bg-secondary-teal rounded-lg text-white border-0 outline-0 cursor-pointer px-12 py-2.5 w-fit">
      {children}
    </button>
  );
}
