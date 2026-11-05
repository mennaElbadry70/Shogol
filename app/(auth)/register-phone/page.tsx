import Image from "next/image";
import ButtonBig from "@/components/button-big";

export default function RegisterPohone() {
  return (
    <div className="flex items-center justify-center bg-background-light-gray min-h-screen p-4">
      <div className="bg-background-white flex flex-col w-full max-w-md px-5 py-6 sm:px-8 sm:py-7 rounded-md shadow-sm">
        <div className="flex justify-center items-center flex-col gap:6 sm:gap-8">
          <Image
            src="/wesbitLogoText.avif"
            alt="Shogol Icon"
            width={100}
            height={100}
            priority
          />
          <h4 className="sub-heading">إنشاء حساب</h4>
        </div>

        <div className="flex flex-col gap-1 mt-7">
          <label className="text-text-black mb-2">
            رقم الجوال<span className="text-red-500">*</span>
          </label>
          <input
            required
            type="tel"
            placeholder="ادخل رقم الجوال"
            className="border border-[#D1DBE1] bg-background-light-gray py-3 px-1.5 rounded-2xl outline-0"
          />
          <p className="text-text-black text-sm">
            بالرجاء إدخال رقم الجوال لإرسال رمز التأكيد
          </p>

          <div className="flex items-center gap-1.5 mb-4 mt-7">
            <input type="checkbox" className="size-5 accent-notify-green" />
            <label className="text-text-black">
              اوافق علي الشروط و الاحكام
            </label>
          </div>

          <ButtonBig>إرسال</ButtonBig>
          <hr className="my-3 border-[#c4ccd1]" />
          <p className="text-text-black">
            لديك حساب بالفعل{" "}
            <span className="text-secondary-teal">تسجيل دخول</span>
          </p>
        </div>
      </div>
    </div>
  );
}
