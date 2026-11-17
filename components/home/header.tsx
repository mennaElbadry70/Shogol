"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellRing, Menu, MessageSquareText, X } from "lucide-react";
import ButtonSmall from "../button-small";

// change the hrefs to your real routes
const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/ads", label: "الاعلانات" },
  { href: "/requests", label: "الطلبات" },
  { href: "/freelancers", label: "المشتغلين" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 before:block before:h-1 before:bg-linear-90 before:from-[#29B1BE] before:to-[#6B79B9]">
      <div className="wrapper py-3">
        <div className="flex items-center justify-between gap-4">
          {/* logo + desktop links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="shrink-0">
              <Image
                src="/wesbitLogoText.avif"
                alt="شغل"
                width={100}
                height={100}
                priority
                className="h-auto w-20 sm:w-25"
              />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-link-blue">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="rounded-md bg-[#f3efef] px-2 py-1.5 text-secondary-teal"
            >
              <MessageSquareText aria-hidden="true" />
            </button>

            <button
              type="button"
              className="rounded-md bg-[#f3efef] px-2 py-1.5 text-secondary-teal"
            >
              <BellRing />
            </button>

            {/* desktop only */}
            <div className="hidden items-center gap-4 lg:flex">
              <ButtonSmall>كن مشتغل</ButtonSmall>
              <Link href="/login" className="text-secondary-teal">
                تسجيل الدخول
              </Link>
            </div>

            {/* hamburger: mobile and tablet only */}
            <button
              type="button"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-1.5 text-secondary-teal lg:hidden"
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <nav
            id="mobile-menu"
            aria-label="القائمة"
            className="mt-3 border-t border-gray-300 pb-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-link-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-3">
              <ButtonSmall>كن مشتغل</ButtonSmall>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-secondary-teal"
              >
                تسجيل الدخول
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
