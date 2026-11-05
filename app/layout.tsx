import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "@/app/globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: " منصة شغل | مجتمعك المباشر للعمل الحر بدون استقطاعات",
  description:
    ". واطلبها مباشرة. خدمات عامة عن بعد. ادارة املاك. محمد التويم. 300ر.س. Shogol. إعلان خدمة من مشتغل. محمد التويم. ادارة املاك. عن بعد. 300",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="rtl" className={cairo.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
