import { ClipboardClock, FileChartColumnIncreasing } from "lucide-react";
import ServiceCard from "@/components/home/service-card";

export default function PriceSection() {
  return (
    <div className="wrapper">
      <h2 className="my-8 text-center text-3xl font-bold text-supporting-blue lg:my-12 lg:text-[45px]">
        لماذا طلب عرض سعر افضل؟
      </h2>

      <div className="flex flex-col gap-12">
        {/* TEXT AREA AND FORM */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* TEXT AREA */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl text-secondary-teal lg:text-[30px]">
              معلومات
            </h4>
            <h3 className="text-2xl font-bold text-text-black lg:text-[40px]">
              لماذا طلب عرض السعر ..؟
            </h3>
            <div className="mt-3 flex flex-col items-start gap-1">
              <span className="h-0.5 w-14 bg-secondary-teal" />
              <span className="h-0.5 w-10 bg-secondary-teal" />
            </div>
            <ul className="leading-8 text-text-gray mt-3.5">
              <li>اولا : ستطلب ولن تبحث وستوفر عنا البحث</li>
              <li>ثانيا : ستكشف سعر السوق للخدمة التى تبحث عنها</li>
              <li>ثالثا : ستتصفح السيرة الذكية للمشتغلين الجاهزين لخدمتك</li>
              <li>
                رابعا : ستختار السعر و المشتغل الانسب لك بكل ثقه وراحه بال
              </li>
            </ul>
          </div>

          {/* FORM */}
          <form className="flex w-full flex-col gap-3 bg-background-light-gray px-5 py-8 lg:w-1/2">
            <label
              htmlFor="request-title"
              className="font-bold text-supporting-blue"
            >
              عنوان الطلب
            </label>
            <input
              id="request-title"
              type="text"
              className="w-full rounded-lg bg-white py-2.5 focus:outline-1 focus:outline-secondary-teal"
            />

            <label
              htmlFor="request-details"
              className="font-bold text-supporting-blue"
            >
              اكتب تفاصيل الطلب
            </label>
            <textarea
              id="request-details"
              placeholder="صف مشروعك هنا"
              className="h-32 w-full resize-none rounded-lg bg-white focus:outline-1 focus:outline-secondary-teal"
            />

            <button className="w-full self-end rounded-lg bg-secondary-teal py-4 text-white sm:w-1/2">
              التالي
            </button>
          </form>
        </div>

        {/* VIDEO AND CARDS*/}
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
          <div className="w-full min-w-0 xl:flex-1">
            <video
              controls
              preload="metadata"
              poster="/videoThumbnail.jpg"
              playsInline
              className="h-64 w-full rounded-xl bg-black object-cover sm:h-80"
            >
              <source src="/videoplayback.m4v" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ServiceCard
              icon={FileChartColumnIncreasing}
              heading="تكشف اسعار السوق"
            />
            <ServiceCard icon={ClipboardClock} heading="توفير الوقت" />
          </div>
        </div>
      </div>
    </div>
  );
}
