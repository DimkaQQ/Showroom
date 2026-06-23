import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Showroom } from "@/components/showroom";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <Navbar />
      <Hero />
      <Services />
      <Showroom />
      <Contact />
      <Footer />
    </main>
  );
}
