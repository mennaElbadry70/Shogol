import { Clock } from "lucide-react";
import { HandCoins } from "lucide-react";
import { CircleStar } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

import Header from "@/components/header";
import WebsiteSearch from "@/components/website-search";

export default function Home() {
  return (
    <>
      <Header />
      <WebsiteSearch />
      <div className="bg-[url(/public/suitcase-hero.avif)] bg-no-repeat bg-cover">
        <div>
          <h1>منصة شغل</h1>
          <p>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </p>
          <button className="bg-white text-link-blue px-3 py-1">
            عن المنصة
          </button>
        </div>

        <div className="flex justify-center items-center">
          <ul>
            <li>
              مفهوم جديد <CircleStar color="#FFFFFF" />
            </li>

            <li>
              حرية في التعامل{" "}
              <BriefcaseBusiness color="text-background-white" />
            </li>

            <li>
              تثمين للوقت <Clock color="#FFFFFF" />
            </li>

            <li>
              شمولية في الخدمات <HandCoins color="#FFFFFF" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
