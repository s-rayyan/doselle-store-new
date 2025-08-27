import { useState } from "react";
import { useRouter } from "next/router";
import { Link, Image, Card, CardHeader, CardBody, CardFooter, Chip, Divider, Button } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

// Product data - in a real app this would come from an API or database
const products = [
  {
    id: "1",
    name: "Premium Pill Cutter",
    description: "Precision-engineered pill cutter for accurate, clean cuts every time",
    images: ["/images/cutter1.png", "/images/cutter2.png", "/images/cutter3.png"],
    price: "$6.40",
    originalPrice: "$7.99",
    features: [
      "Sharp stainless steel blade",
      "Safety shield protection",
      "Built-in storage compartment",
      "Non-slip base for stability",
      "Suitable for all pill sizes"
    ],
    badge: "Best Seller",
    whyChoose: {
      title: "Why Choose Our Premium Pill Cutter?",
      reasons: [
        {
          title: "Superior Cutting Precision",
          description: "Our pill cutter features a laser-aligned cutting mechanism that ensures perfectly even splits every time, unlike traditional cutters that often crush or unevenly divide pills.",
          competitor: "Traditional pill cutters often have misaligned blades that result in uneven cuts or crushed pills."
        },
        {
          title: "Enhanced Safety Features",
          description: "The integrated safety shield prevents accidental contact with the sharp blade, a feature missing in most competing products.",
          competitor: "Many competitors lack safety shields, increasing the risk of cuts during use."
        },
        {
          title: "Durable Construction",
          description: "Made with high-grade stainless steel and impact-resistant materials that outlast cheaper plastic alternatives by years.",
          competitor: "Competing products often use low-quality plastics that degrade quickly and break easily."
        },
        {
          title: "Convenient Storage",
          description: "Built-in storage compartment keeps your cutter clean and ready for use, something rarely found in competitor products.",
          competitor: "Most competing cutters require separate storage solutions or get lost easily."
        }
      ]
    },
    bestFeatures: [
      {
        title: "Perfect Cuts Every Time",
        description: "Our precision-engineered blade delivers clean, accurate cuts without crumbling or uneven division."
      },
      {
        title: "Universal Compatibility",
        description: "Works flawlessly with all pill shapes and sizes, from small tablets to large capsules."
      },
      {
        title: "Easy to Clean",
        description: "Smooth surfaces and removable parts make cleaning quick and hassle-free."
      },
      {
        title: "Travel-Friendly Design",
        description: "Compact size with safety lock makes it perfect for home use or on-the-go medication management."
      }
    ],
    link: "https://www.amazon.com/Doselle-2PCS-Splitter-Professional-Centering/dp/B0D83CJ3T9/"
  },
  {
    id: "2",
    name: "Travel Pill Organizer Box",
    description: "Stay organized with our spacious weekly pill organizer",
    images: ["/images/box1.png", "/images/box2.png", "/images/box3.png"],
    price: "$6.99",
    originalPrice: "$9.99",
    features: [
      "4 sections for separation of pills",
      "BPA-free materials",
      "Secure snap-lock lids",
      "Removable rubber dividers for easy cleaning",
      "Easy to carry and use",
      "Suitable for all pill sizes"
    ],
    badge: "Premium Quality",
    whyChoose: {
      title: "Why Choose Our Travel Pill Organizer Box?",
      reasons: [
        {
          title: "Superior Organization System",
          description: "Our 4-compartment design with removable dividers allows for customizable organization that adapts to your specific medication schedule, unlike fixed-compartment organizers.",
          competitor: "Most competing organizers have fixed compartments that limit flexibility in organizing different pill types."
        },
        {
          title: "Premium Material Quality",
          description: "Made with medical-grade BPA-free silicone that's more durable and hygienic than the plastic alternatives used by competitors.",
          competitor: "Competing products often use low-grade plastics that can harbor bacteria and become brittle over time."
        },
        {
          title: "Leak-Proof Protection",
          description: "Our secure snap-lock lids create a tight seal that prevents spills, even when the organizer is turned upside down - a feature lacking in many similar products.",
          competitor: "Many competitors have loose-fitting lids that can accidentally open and spill contents."
        },
        {
          title: "Easy Maintenance",
          description: "Removable dividers and smooth silicone surfaces make cleaning effortless - simply rinse and dry without disassembling multiple parts.",
          competitor: "Competing products with fixed plastic dividers are difficult to clean thoroughly."
        }
      ]
    },
    bestFeatures: [
      {
        title: "Customizable Compartments",
        description: "Adjustable dividers let you create compartments sized perfectly for your specific medication needs."
      },
      {
        title: "Leak-Proof Design",
        description: "Secure snap-lock lids ensure your pills stay contained even in your busiest travel moments."
      },
      {
        title: "Durable & Hygienic",
        description: "Medical-grade silicone resists bacteria and withstands years of daily use without degrading."
      },
      {
        title: "Travel-Sized Convenience",
        description: "Compact dimensions fit perfectly in bags while providing ample space for a full week of medications."
      }
    ],
    link: "https://www.amazon.com/Doselle-Silicone-Compartment-Organizer-Supplements/dp/B0DLTYN7SS/"
  }
];

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the product based on the ID
  const product = products.find(p => p.id === id);

  // If product not found, show a message
  if (!product && id) {
    return (
      <DefaultLayout>
        <div className="container mx-auto max-w-7xl px-6 py-16">
          <h1 className={title()}>Product Not Found</h1>
          <p className="mt-4">The product you're looking for doesn't exist.</p>
          <Button 
            color="primary" 
            className="mt-6"
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
        </div>
      </DefaultLayout>
    );
  }

  // If product is loading
  if (!product) {
    return (
      <DefaultLayout>
        <div className="container mx-auto max-w-7xl px-6 py-16">
          <p>Loading product...</p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <Button 
              variant="light" 
              onPress={() => router.push("/")}
              className="mb-4"
            >
              ← Back to Products
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative">
                <Image
                  alt={product.name}
                  className="object-contain rounded-xl w-full h-auto"
                  src={product.images[currentImageIndex]}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent hover:border-default-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className={title({ size: "md", class: "mb-2" })}>{product.name}</h1>
                  <p className="text-default-500">{product.description}</p>
                </div>
                <Chip color="secondary" variant="flat">
                  {product.badge}
                </Chip>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-default-400 line-through">{product.originalPrice}</span>
              </div>

              <Divider className="my-6" />

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-success text-lg mt-0.5">✓</span>
                      <span className="text-default-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                className="w-full"
                href={product.link}
                target="_blank"
              >
                <Button
                  color="primary"
                  size="lg"
                  className="w-full"
                >
                  Order Now on Amazon
                </Button>
              </Link>
            </div>
          </div>

          {/* Why Choose This Product */}
          <div className="mt-20 flex flex-col gap-10">
            <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
              {product.whyChoose.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.whyChoose.reasons.map((reason, index) => (
                <Card key={index} className="py-6">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h3 className="text-xl font-bold">{reason.title}</h3>
                  </CardHeader>
                  <CardBody className="py-4">
                    <p className="text-default-600 mb-4">{reason.description}</p>
                    <div className="bg-danger-50 p-4 rounded-lg">
                      <p className="text-sm text-danger-600">
                        <span className="font-semibold">Competitors:</span> {reason.competitor}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          {/* Best Features */}
          <div className="mt-16 flex flex-col gap-10">
            <h2 className={title({ size: "md", class: "mb-8 text-center" })}>
              Best Features of {product.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.bestFeatures.map((feature, index) => (
                <Card key={index} className="py-6 hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                  </CardHeader>
                  <CardBody className="py-4">
                    <p className="text-default-600">{feature.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}