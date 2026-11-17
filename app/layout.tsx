import type { Metadata } from "next";
import { Cairo, El_Messiri } from "next/font/google";
import "@/app/globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const elmessiri = El_Messiri({
  subsets: ["arabic"],
  variable: "--font-elMessiri",
});

export const metadata: Metadata = {
  title: " منصة شغل | مجتمعك المباشر للعمل الحر بدون استقطاعات",
  description:
    ". واطلبها مباشرة. خدمات عامة عن بعد. ادارة املاك. محمد التويم. 300ر.س. Shogol. إعلان خدمة من مشتغل. محمد التويم. ادارة املاك. عن بعد. 300",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${elmessiri.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
