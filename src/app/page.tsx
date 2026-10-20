import { ExploreSection } from "@/components/ExploreSection";
import { Hero } from "@/components/Hero";

/** Landing page. Metadata is inherited from the root layout defaults. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ExploreSection />
    </>
  );
}
