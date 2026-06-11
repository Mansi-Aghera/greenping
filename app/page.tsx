import Features from "@/src/view/Features";
import Hero from "@/src/view/Hero";
import Integrations from "@/src/view/Integrations";
import Transformation from "@/src/view/Transformation";
import AboutUs from "@/src/view/AboutUs";
import WhyTrustUs from "@/src/view/WhyTrustUs";
import Pricing from "@/src/view/Pricing";
import VideoShowcase from "@/src/view/VideoShowcase";
import FAQs from "@/src/view/FAQs";
import ContactUs from "@/src/view/ContactUs";
import Testimonials from "@/src/view/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Transformation />
      <Features />
      <Integrations />
      <VideoShowcase />
      <Pricing />
      <AboutUs />
      <WhyTrustUs />
      <Testimonials />
      <FAQs />
      <ContactUs />
    </>
  );
}
