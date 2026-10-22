import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Honors } from "@/components/sections/honors";
import { PublicationsEducation } from "@/components/sections/publications-education";
import { Contact, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Honors />
        <PublicationsEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
