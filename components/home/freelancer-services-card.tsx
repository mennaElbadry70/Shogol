import Image from "next/image";
import { Banknote, Clock, User } from "lucide-react";
import { FaStar } from "react-icons/fa6";

type FreelancerServiceCardProps = {
  image: string;
  freelancerName: string;
  flag: string;
  service: string;
  title: string;
  serviceDescription: string;
  rating: number;
  reviews: number;
  price: number;
  postedAgo: string;
};

export default function FreelancerServiceCard({
  image,
  freelancerName,
  flag,
  service,
  title,
  serviceDescription,
  rating,
  reviews,
  price,
  postedAgo,
}: FreelancerServiceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[15px] bg-white shadow-lg shadow-[#0000001F]">
      {/* photo */}
      <div className="relative aspect-4/3 w-full">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        {/* freelancer row: avatar + name + category, rating at the end */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded bg-gray-200 text-gray-400">
              <User className="size-5" aria-hidden="true" />
            </div>

            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-text-black">
                  {freelancerName}
                </span>
                {flag && (
                  <Image
                    src={flag}
                    alt=""
                    width={18}
                    height={12}
                    className="h-3 w-auto"
                  />
                )}
              </div>
              <p className="text-xs text-text-gray">{service}</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-xs text-text-gray">
            <FaStar className="text-yellow-400" aria-hidden="true" />
            <span dir="ltr">
              {rating}({reviews})
            </span>
          </div>
        </div>

        {/* title and description */}
        <h3 className="text-sm font-bold text-supporting-blue">{title}</h3>
        <p className="line-clamp-3 text-xs leading-relaxed text-text-gray">
          {serviceDescription}
        </p>

        {/* price and time, pinned to the bottom so all cards line up */}
        <div className="mt-auto flex items-center justify-between pt-3 text-xs font-bold text-secondary-teal">
          <span className="flex items-center gap-1">
            <Banknote className="size-4" aria-hidden="true" />
            ريال {price}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-4" aria-hidden="true" />
            {postedAgo}
          </span>
        </div>
      </div>
    </article>
  );
}
