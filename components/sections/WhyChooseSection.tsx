import { Card, CardBody, Chip } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: "⭐",
      title: "Stylish and Functional",
      description: "Our pill boxes feature a premium pink color to have you stay healthy in style.",
      highlight: "Perfect Style"
    },
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Our pill cutters feature razor-sharp stainless steel blades and precise alignment guides for perfect cuts every time.",
      highlight: "Perfect Cuts"
    },
    {
      icon: "🛡️",
      title: "Safety-First Design",
      description: "Integrated safety shields, non-slip bases, and secure locking mechanisms protect you during use.",
      highlight: "Safe & Secure"
    },
    {
      icon: "✨",
      title: "Easy Organization",
      description: "Clear compartments, easy-to-read labels, and intuitive layouts make medication management effortless.",
      highlight: "Stay Organized"
    },
    {
      icon: "🏠",
      title: "Home & Travel Ready",
      description: "Compact designs that work perfectly at home or on-the-go, fitting seamlessly into your lifestyle.",
      highlight: "Versatile Use"
    },
    {
      icon: "💰",
      title: "Exceptional Value",
      description: "Professional-quality products at affordable prices, backed by our satisfaction guarantee.",
      highlight: "Great Price"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-default-100">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className={title({ size: "md", class: "mb-4" })}>
            Why Choose Our Products?
          </h2>
          <p className={subtitle({ class: "max-w-3xl" })}>
            Our pill management solutions are designed with real-world needs in mind,
            combining cutting-edge functionality with user-friendly design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="py-6 hover:scale-105 transition-all duration-300">
              <CardBody className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <Chip color="primary" variant="flat" size="sm" className="mb-3">
                  {feature.highlight}
                </Chip>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-default-600 leading-relaxed">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};