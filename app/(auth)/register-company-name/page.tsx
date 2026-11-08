import { Camera } from "lucide-react";
import ButtonSmall from "@/components/button-small";

export default function RegisterCompanyName() {
  return (
    <div className="flex items-center justify-center bg-background-light-gray min-h-screen p-4">
      <div className="bg-background-white flex flex-col w-full max-w-md lg:w-134 px-5 py-6 sm:px-8 sm:py-7 rounded-md shadow-sm">
        {/* FILE INPIT AND TEXT */}
        <div className="flex justify-center items-center flex-col gap-y-10 gap:8 sm:gap-6 mb-8 mt-6">
          <input
            type="file"
            className="text-text-black border border-solid border-[#D1DBE1] rounded-lg"
          />
          <Camera className="size-5 text-secondary-teal" />
          <h4 className="sub-heading">الاسم بالكامل</h4>
          <p className="text-text-black">من فضلك استخدم اسمك الحقيقي</p>
        </div>

        {/* NAME FORM INPUTS */}
        <div className="flex flex-col gap-1 mt-5">
          <label className="text-text-black">
            اسم الشركة<span className="text-red-500"> *</span>
          </label>
          <input
            className="focus:outline-secondary-teal text-text-black border border-solid border-[#D1DBE1] rounded-lg bg-background-light-gray"
            placeholder="الاسم الاول و الاخير"
            type="text"
          />

          <label className="text-text-black">الوصف المختصر</label>
          <input
            className="focus:outline-secondary-teal text-text-black border border-solid border-[#D1DBE1] rounded-lg bg-background-light-gray"
            placeholder="مثال - مطور ويب - خبير صيانة"
            type="text"
          />

          <label className=" text-text-black ">نبذة عن الشركة</label>

          <input
            className="focus:outline-secondary-teal rounded-lg border border-solid border-[#D1DBE1] bg-background-light-gray"
            placeholder="اكتب نبذة"
            type="text"
          />

          {/* TWO BUTTONS  */}
          <div className="flex justify-between items-center">
            <ButtonSmall>رجوع</ButtonSmall>
            <ButtonSmall>التالي</ButtonSmall>
          </div>
        </div>
      </div>
    </div>
  );
}
