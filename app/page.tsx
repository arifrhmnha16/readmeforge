import { Cta } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Templates } from "@/components/landing/templates";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Cta />
    </main>
  );
}
