import { Card, CardBody } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "🏥",
      title: "Removable Rubber",
      description: "Designed with removable rubber inner container for easy cleaning"
    },
    {
      icon: "🔒",
      title: "Safety First",
      description: "Engineered with protective features to prevent accidents and injuries"
    },
    {
      icon: "💡",
      title: "Easy to Use",
      description: "Intuitive design suitable for all ages, from seniors to caregivers"
    },
    {
      icon: "🎯",
      title: "Precision Design",
      description: "Accurate cutting and secure storage for optimal medication management"
    }
  ];

  return (
    <section id="features" className="py-16 pt-10 bg-default-100">
      <div className="mx-auto max-w-7xl p-10">
        <h2 className={title({ size: "md", class: "mb-4" })}>
          Why Choose Doselle?
        </h2>
        <p className={subtitle({ class: "mb-12 max-w-2xl" })}>
          We're committed to providing the highest quality medication management solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="py-4">
              <CardBody className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-default-500">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};