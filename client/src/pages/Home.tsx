import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Trainings } from "@/components/sections/Trainings";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainings />
      </main>
      <Footer />
    </div>
  );
}