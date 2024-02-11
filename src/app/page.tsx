import { Metadata } from "next";
import Hero from "./_components/Hero";
import Work from "./_components/Work";
import Experiences from "./_components/Experiences";
import Footer from "./_components/Footer";
import Navigation from "./_components/ui/navigation";

export const metadata: Metadata = {
  title: "Sean Pak's Portfolio",
};

export default function Home() {
  return (
    <div className="scroll-snap-container">
      {/* Hero */}
      <Hero />

      {/* Work */}
      <Work />

      {/* Experiences Overview */}
      <Experiences />

      {/* Contact Me */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
