import ButtonBig from "./button-big";

export default function WebsiteSearch() {
  return (
    <>
      <div className="flex items-around justify-center bg-background-light-gray px-9 py-3.5">
        <div className="w-full px-">
          <input type="text" placeholder="ابحث هنا" />
        </div>

        <div className="">
          <ButtonBig>اطلب عرض سعر</ButtonBig>
        </div>
      </div>
    </>
  );
}
