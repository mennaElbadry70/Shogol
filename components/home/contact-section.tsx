import Image from "next/image";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
};

// one labeled input, reused for every short field in the form
function Field({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold text-supporting-blue">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-[#E3E8EC] bg-white px-4 py-3 text-sm text-text-black placeholder:text-text-gray/60 focus:outline-2 focus:outline-secondary-teal"
      />
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="wrapper py-12 mb-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* photo: first in the code, so it sits on the right in RTL */}
        <div className="relative min-h-64 overflow-hidden rounded-2xl sm:min-h-80">
          <Image
            src="/call-center.avif"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* heading + form */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-heading text-3xl text-secondary-teal">معلومات</p>
            <h2 className="text-3xl font-bold text-supporting-blue lg:text-[45px]">
              نحن نفضل ان نسمع منك؟
            </h2>

            {/* the two short decorative lines under the title */}
            <div className="mt-3 flex flex-col items-start gap-1">
              <span className="h-0.5 w-14 bg-secondary-teal" />
              <span className="h-0.5 w-10 bg-secondary-teal" />
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="الاسم"
                placeholder="الاسم"
                autoComplete="name"
              />
              <Field
                id="email"
                label="الايميل"
                type="email"
                placeholder="mmmmm@gmail.com"
                autoComplete="email"
              />
              <Field
                id="phone"
                label="رقم الجوال"
                type="tel"
                placeholder="00000000"
                autoComplete="tel"
              />
              <Field id="field" label="المجال" placeholder="المجال" />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="comment"
                className="text-sm font-bold text-supporting-blue"
              >
                اكتب تعليقك
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="اكتب تعليقك"
                className="h-32 w-full resize-none rounded-2xl border border-[#E3E8EC] bg-white px-4 py-3 text-sm text-text-black placeholder:text-text-gray/60 focus:outline-2 focus:outline-secondary-teal"
              />
            </div>

            {/* self-end = the left side on an RTL page, like the design */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-secondary-teal py-3.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-teal sm:w-40 sm:self-end"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
