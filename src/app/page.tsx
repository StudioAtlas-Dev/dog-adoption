import Image from "next/image";
import HeroComponent from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
export default function Home() {
  return (
    <>
      <HeroComponent 
        tagline="Rescue. Rehabilitate. Rehome."
        title="Making a Paw-sitive Difference, One Dog at a Time."
        description="We provide rescued dogs with loving care and thorough evaluation, striving to place them in compatible forever homes where they will be cherished for life."
        primaryButtonHref="/adopt"
        primaryButtonText="Adopt Today"
        secondaryButtonHref="/donate"
        secondaryButtonText="Donate"
        popColor="primary"
      />
      <FeaturedCards />
    </>
  );
}
