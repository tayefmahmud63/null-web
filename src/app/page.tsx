import {Hero} from "@/components/hero-section";
import { ClientsLogo } from "@/components/clients-logo";
import FeaturesCards from "@/components/feature-shader-cards";
import {Testimonials }from "@/components/testimonials";
import { ContactPage } from "@/components/contact-page";
import { Newsletter } from "@/components/newsletter";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Feature2 } from "@/components/ui/feature-with-image-carousel-2";
import { MinimalFooter } from "@/components/minimal-footer";


export default function Home() {
  return (
  <div>
   <Hero />
   <ClientsLogo />
  <FeaturesCards />
  <Feature/>
  <Feature2 />
  <Testimonials />
  <ContactPage />
  <Newsletter />
  <MinimalFooter />
  </div>
   );
}
