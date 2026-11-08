import { MessageSquareText } from "lucide-react";
import { BellRing } from "lucide-react";
import Image from "next/image";
import ButtonSmall from "./button-small";

export default function Header() {
  return (
    <div
      className="flex items-center justify-around border-2 border-b-text-gray px-9 py-3.5
   after:content-[''] after:absolute after:top-0 after:left-0 
   after:w-full after:h-1 after:bg-linear-to-r after:from-[#29B1BE]  after:to-[#6B79B9]"
    >
      <ul className="flex items-center justify-center gap-7">
        <li>
          <Image
            src="/wesbitLogoText.avif"
            alt="website logo"
            width={100}
            height={100}
          />
        </li>

        <li className="text-link-blue">الرئيسية</li>
        <li className="text-link-blue">الاعلانات</li>
        <li className="text-link-blue">الطلبات</li>
        <li className="text-link-blue">المشتغلين</li>
        <li className="text-link-blue">تواصل معنا</li>
      </ul>

      <ul className="flex items-center justify-center gap-7">
        <li className="bg-[#f3efef] px-2 py-1.5 rounded-md text-secondary-teal">
          <MessageSquareText />
        </li>

        <li className="bg-[#f3efef] px-2 py-1.5 rounded-md text-secondary-teal">
          <BellRing />
        </li>

        <li>
          <ButtonSmall>كن مشتغل</ButtonSmall>
        </li>

        <li className="text-secondary-teal">تسجيل الدخول</li>
      </ul>
    </div>
  );
}
