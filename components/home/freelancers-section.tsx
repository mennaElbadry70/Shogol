import FreelancerServiceCard from "./freelancer-services-card";

// placeholder content: replace the images and titles with the ones from the XD frame
const services = [
  {
    image: "/code.jpg",
    freelancerName: "عدنان السوري",
    flag: "",
    service: "برمجة مواقع",
    title: "متخصصو تطبيقات الويب التقدمية",
    serviceDescription:
      " ممصم مواقع ويب استخدم احدث التقنيات و اعمل علي تطوير الموقع بحيث يكون سريع و مناسب لكل الشاشات مثل الهاتف و التابلت ",
    rating: 4.3,
    reviews: 2,
    price: 280,
    postedAgo: "قبل 50 دقيقة",
  },

  {
    image: "/chart.jpg",
    freelancerName: "عبير الصغير",
    flag: "",
    service: "تسويق",
    title: "التسويق و الاعلانات",
    serviceDescription:
      "اعمل في التسويق خاصة تسويق العقارات و عمل حملات اعلانية عبر المنصات المختلفة خبرة اكثر من سنتين",
    rating: 4,
    reviews: 2,
    price: 175,
    postedAgo: "قبل 45 دقيقة",
  },

  {
    image: "/laptopGoogle.jpg",
    freelancerName: "منة الزوهيري",
    flag: "",
    service: "صناعة محتوي",
    title: "التسويق و صناعة المحتوي الرقمي",
    serviceDescription:
      "مصمم مواقع مرحبا انا أبو عدنان السوري اعمل لدي شركة فرانكو للادوات الصحية و لدي العديد من الخبرات في هذا المجال",
    rating: 4.7,
    reviews: 2,
    price: 195,
    postedAgo: "قبل 30 دقيقة",
  },

  {
    image: "/sheet.jpg",
    freelancerName: "عصام مقداد السيد",
    flag: "",
    service: "ادخال بيانات",
    title: "ادخال و تجميع و تنسيق البيانات",
    serviceDescription:
      "مدخلة بياانات استطيع تجميع و تنسيق البيانات عبر المنصات المختلفة و عمل شيت اكسيل من صفحات متعددة خبرة ثلاث سنوات",
    rating: 3.9,
    reviews: 2,
    price: 230,
    postedAgo: "قبل 25 دقيقة",
  },
];

export default function FreelancersSection() {
  return (
    <section className="wrapper py-12 bg-background-light-gray mb-12">
      <p className="font-heading text-secondary-teal text-center">
        بعض الخدمات وظائق شغل
      </p>
      <h2 className="mb-8 text-3xl font-bold text-supporting-blue lg:text-[45px] text-center">
        اهم الخدمات الاحترافية لتطوير وتنمية اعمالك
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12 px-6 py-3.5">
        {services.map((service) => (
          <FreelancerServiceCard
            key={service.title}
            image={service.image}
            freelancerName={service.freelancerName}
            flag={service.flag}
            service={service.service}
            title={service.title}
            serviceDescription={service.serviceDescription}
            rating={service.rating}
            reviews={service.reviews}
            price={service.price}
            postedAgo={service.postedAgo}
          />
        ))}
      </div>
      <button className="py-3 w-full md:w-1/3 lg:w-1/5 lg:px-11 text-white bg-secondary-teal rounded-xl block mx-auto">
        عرض الكل
      </button>
    </section>
  );
}
