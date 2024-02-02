import { Metadata } from "next";
import Hero from "./_components/Hero";
import Work from "./_components/Work";

export const metadata: Metadata = {
  title: "Sean Pak's Portfolio",
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Work */}
      <Work />

      {/* Experience Overview #1 */}

      {/* Experience Overview #N */}

      {/* Contact Me */}

      {/* Footer */}
    </div>
  );
}
