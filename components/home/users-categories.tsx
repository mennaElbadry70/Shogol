import Image from "next/image";

export default function UserCategories() {
  return (
    <div className="wrapper mt-2.5">
      <Image
        src="/servicesHome.png"
        alt="user types"
        width={700}
        height={400}
        sizes="(min-width: 1024px) 90vw, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
