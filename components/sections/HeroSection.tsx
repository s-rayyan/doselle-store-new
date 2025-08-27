import { Link, button as buttonStyles } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import { TypeWriter } from "@/components/TypeWriter";

export const HeroSection = () => {
  const typewriterPhrases = [
    "Stay Healthy In Style",
    "Have Confidence In Your Health",
    "Enjoy the Simplicity in Your Health",
    "Have Precision",
    "Stay Healthy, Stay Comfortable",
    "Simplifying Health, One Pill at a Time"
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16 md:py-24 min-h-[60vh]">
      <div className="inline-block max-w-screen text-center justify-center">
        <h1 className={title({ size: "lg", class: "text-nowrap" })}>
          <TypeWriter
            phrases={typewriterPhrases}
            typingSpeed={60}
            deletingSpeed={60}
            pauseTime={3000}
          />
        </h1>
        <p className={subtitle({ class: "mt-6 max-w-2xl mx-auto" })}>
          At Doselle, we simplify health and wellness with thoughtfully designed products for modern lifestyles.
          From managing medications to organizing supplements, our sleek, reliable solutions blend functionality and style.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg"
            })}
            href="#products"
          >
            Shop Now
          </Link>
          <Link
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              size: "lg"
            })}
            href="#features"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};