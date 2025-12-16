import {Hero} from "@/components/hero-section";
import  ClientLogo9  from "@/components/ClientLogo9";
import FeaturesCards from "@/components/feature-shader-cards";
import {Testimonials }from "@/components/testimonials";

import { Newsletter } from "@/components/newsletter";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Feature2 } from "@/components/ui/feature-with-image-carousel-2";
import { MinimalFooter } from "@/components/minimal-footer";


export default function Home() {
  return (
  <div>
   <Hero />
   <ClientLogo9 />
  <FeaturesCards />
  <Feature/>
  <Feature2 />
  <Testimonials />

  <Newsletter />
  <MinimalFooter />
  </div>
   );
}
