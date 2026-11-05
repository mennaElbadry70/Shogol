"use client";

import { useState } from "react";
import Image from "next/image";
import OtpInput from "react-otp-input";
import ButtonBig from "@/components/button-big";

export default function RegisterOTP() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex items-center justify-center bg-background-light-gray min-h-screen p-4">
      <div className="bg-background-white flex flex-col sm:px-4 sm:py-6 md:px-5 md:py-6 lg:px-12 lg:py-14 lg:w-89 rounded-md shadow-sm">
        {/* LOGO AND HEADING*/}
        <div className="flex justify-center items-center flex-col gap:6 sm:gap-8">
          <Image
            src="/wesbitLogoText.avif"
            alt="Shogol Icon"
            width={100}
            height={100}
            priority
          />
          <h4 className="sub-heading">رمز التحقق</h4>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            placeholder="————"
            containerStyle="flex justify-center gap-3"
            inputStyle="w-14! h-14 rounded-xl border border-[#D1DBE1] bg-background-light-gray text-xl text-text-black focus:border-secondary-teal focus:outline-none placeholder:text-[#c4ccd1]"
          />
          <p className="text-text-black">
            لم يصلك الرمز{" "}
            <span className="text-secondary-teal">إعادة إرسال رمز التأكيد</span>
          </p>
        </div>

        {/* BUTTON AND TEXT BOTTOM AREA */}
        <div className="flex flex-col gap-1 mt-7 align-middle">
          <ButtonBig>التالي</ButtonBig>
          <hr className="my-3 border-[#c4ccd1]" />
          <p className="text-text-black">
            لديك حساب بالفعل
            <span className="text-secondary-teal"> تسجيل الدخول </span>
          </p>
        </div>
      </div>
    </div>
  );
}
