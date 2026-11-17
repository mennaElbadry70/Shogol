import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaSnapchat, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";

// change the hrefs to your real routes
const aboutLinks = [
  { label: "معلومات عن شغل", href: "#" },
  { label: "الاسئلة الشائعة", href: "#" },
  { label: "ضمان حقوقك", href: "#" },
  { label: "شروط الاستخدام", href: "#" },
];

const linkColumns = [
  {
    title: "روابط",
    links: [
      { label: "الشركاء", href: "#" },
      { label: "المقالات", href: "#" },
      { label: "مركز المساعدة", href: "#" },
    ],
  },
  {
    title: "صفحات",
    links: [
      { label: "تسجيل جديد", href: "#" },
      { label: "قدم كشريك", href: "#" },
      { label: "تصفح كل الفئات", href: "#" },
      { label: "اتصل بنا", href: "#" },
    ],
  },
];

const socials: { icon: IconType; label: string; href: string }[] = [
  { icon: FaSnapchat, label: "سناب شات", href: "#" },
  { icon: LuInstagram, label: "انستغرام", href: "#" },
  { icon: FaTwitter, label: "تويتر", href: "#" },
  { icon: RiFacebookCircleLine, label: "فيسبوك", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-link-blue before:absolute before:top-0 before:h-3.5 before:w-full before:bg-linear-90 before:from-[#29B1BE] before:to-[#6B79B9] before:content-['']">
      <div className="wrapper pt-12 pb-8">
        {/* 2 columns on phones, 4 on tablets, 5 from lg */}
        <div className="grid grid-cols-2 items-baseline gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-3 lg:gap-y-5">
          {/* LOGO: its own row on lg, so it sits higher than the columns */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:row-start-1">
            <Image
              src="/websitLogoTextWhite.png"
              alt="شغل"
              width={100}
              height={100}
              className="h-auto w-24"
            />
          </div>

          {/* ABOUT LINKS: start on the same line as the column titles */}
          <ul className="col-span-2 flex flex-col gap-1 md:col-span-4 lg:col-span-1 lg:col-start-1 lg:row-start-2">
            {aboutLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="font-bold text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LINK COLUMNS */}
          {linkColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="lg:row-start-2"
            >
              <h3 className="mb-4 font-bold text-secondary-teal">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-heading text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* APP BADGES */}
          <div className="lg:row-start-2">
            <h3 className="mb-4 font-bold text-secondary-teal">
              حمل تطبيق شغل
            </h3>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <a
                  href="https://www.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/appStore.svg"
                    alt="App Store"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/googleplay.svg"
                    alt="Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-span-2 md:col-span-1 lg:row-start-2">
            <h3 className="mb-4 font-bold text-secondary-teal">تابعنا</h3>
            <ul className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-8 items-center justify-center rounded-full bg-white text-black"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* copyright bar: in normal flow now, so it never overlaps the content */}
      <div className="bg-black/30 px-4 py-3 text-center text-sm text-white">
        Copyright ©2021 All rights reserved | Shogl Platform by lun startup
        studio
      </div>
    </footer>
  );
}
