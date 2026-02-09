import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { HeroVideo } from "@/components/HeroVideo";
import { HeroContent } from "@/components/HeroContent";

export const metadata: Metadata = {
  title: "Flymac Studios | Live to Tell Stories",
  description:
    "Drone Pilot & Videographer. Premium creative portfolio — photography and film.",
  openGraph: {
    title: "Flymac Studios | Live to Tell Stories",
    description:
      "Drone Pilot & Videographer. Premium creative portfolio.",
  },
};

export default function HomePage() {
  return (
    <Layout>
      <aside className="relative w-full md:w-1/2 md:min-h-screen flex-shrink-0 order-1 md:order-1">
        <HeroVideo disableOnMobile={true} />
      </aside>
      <main className="w-full md:w-1/2 bg-white dark:bg-dark-bg flex-shrink-0 order-2 md:order-2 flex items-center justify-center transition-colors duration-300">
        <HeroContent />
      </main>
    </Layout>
  );
}
