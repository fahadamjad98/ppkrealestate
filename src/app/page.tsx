import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => m.Experience),
);
const Journey = dynamic(() =>
  import("@/components/sections/Journey").then((m) => m.Journey),
);
const Footprint = dynamic(() =>
  import("@/components/sections/Footprint").then((m) => m.Footprint),
);
const Transform = dynamic(() =>
  import("@/components/sections/Transform").then((m) => m.Transform),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services),
);
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => m.Projects),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process),
);
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials),
);
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const ContactCTA = dynamic(() =>
  import("@/components/sections/ContactCTA").then((m) => m.ContactCTA),
);

export default function Home() {
  return (
    <>
      {/* Hero is pinned; the content panel below scrolls up and over it. */}
      <Hero />
      <div className="relative z-10 bg-background shadow-[0_-40px_80px_-40px_rgba(20,16,11,0.45)]">
        <Experience />
        <Footprint />
        <TrustedBy />
        <Journey />
        <Transform />
        {/* <Services /> */}
        <Projects />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </div>
    </>
  );
}
