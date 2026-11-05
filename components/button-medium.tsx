import { ReactNode } from "react";

type ButtonMediumStyleProps = {
  children: ReactNode;
};

export default function ButtonMedium({ children }: ButtonMediumStyleProps) {
  return <button className="bg-secondary-teal">{children}</button>;
}
