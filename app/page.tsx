import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import PriceSection from "@/components/home/price-section";
import WebsiteSearch from "@/components/home/website-search";
import UserCategories from "@/components/home/users-categories";
import FreelancersSection from "@/components/home/freelancers-section";
import ContactSection from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <WebsiteSearch />
      <HeroSection />
      <PriceSection />
      <UserCategories />
      <FreelancersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
