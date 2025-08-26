import { Divider } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ProductsSection />

      <Divider />

      <WhyChooseSection />

      <Divider />

      <TestimonialsSection />

      <Divider />

      <FeaturesSection />
    </DefaultLayout>
  );
}