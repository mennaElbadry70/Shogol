import Image from "next/image";
import {
  BriefcaseBusiness,
  CircleStar,
  Clock,
  HandCoins,
  type LucideIcon,
} from "lucide-react";

const features: { icon: LucideIcon; label: string }[] = [
  { icon: CircleStar, label: "مفهوم جديد" },
  { icon: BriefcaseBusiness, label: "حرية في التعامل" },
  { icon: Clock, label: "تثمين للوقت" },
  { icon: HandCoins, label: "شمولية في الخدمات" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-150 flex-col overflow-hidden rounded-br-[80px] lg:min-h-screen lg:rounded-br-[210px]">
      <Image
        src="/suitcase-hero-edited.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* on phones the text sits over the photo, so darken it a little */}
      <div className="absolute inset-0 bg-hero-blue/60 lg:hidden" />

      {/* content */}
      <div className="wrapper relative z-10 flex flex-1 flex-col pt-12 pb-8 lg:pb-10">
        <div className="flex max-w-155.5 flex-1 flex-col items-start justify-center gap-4 lg:gap-6">
          <h1 className="text-4xl font-bold leading-tight text-white lg:text-[52px]">
            منصة شغل
          </h1>

          <p className="text-base leading-relaxed text-white lg:text-[20px]">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </p>

          <button
            type="button"
            className="w-full rounded-xl bg-white py-3.5 text-[18px] text-link-blue sm:w-56"
          >
            عن المنصة
          </button>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3">
          {features.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="size-5 shrink-0 text-white" aria-hidden="true" />
              <p className="text-sm font-bold text-white sm:text-base">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
