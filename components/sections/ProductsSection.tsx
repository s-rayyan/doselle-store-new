import { Link, Image, Card, CardHeader, CardBody, CardFooter, Chip, Divider, button as buttonStyles } from "@heroui/react";
import { useState } from "react";
import { title, subtitle } from "@/components/primitives";

export const ProductsSection = () => {
  const [cutterImage, setCutterImage] = useState(1);
  const [boxImage, setBoxImage] = useState(1);

  const products = [
    {
      id: 1,
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
      currentImage: cutterImage,
      link: "https://www.amazon.com/Doselle-2PCS-Splitter-Professional-Centering/dp/B0D83CJ3T9/",
      setImage: setCutterImage
    },
    {
      id: 2,
      name: "Travel Pill Organizer Box",
      description: "Stay organized with our spacious weekly pill organizer",
      images: ["/images/box1.png", "/images/box2.png", "/images/box3.png"],
      price: "$6.99",
      originalPrice: "$9.99",
      features: [
        "4 sections for seperation of pills",
        "BPA-free materials",
        "Secure snap-lock lids",
        "Removable rubber dividers for easy cleaning",
        "Easy to carry and use",
        "Suitable for all pill sizes"
      ],
      badge: "Premium Quality",
      currentImage: boxImage,
      link: "https://www.amazon.com/Doselle-Silicone-Compartment-Organizer-Supplements/dp/B0DLTYN7SS/",
      setImage: setBoxImage
    }
  ];

  return (
    <section id="products" className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className={title({ size: "md", class: "mb-4" })}>
          Our Products
        </h2>
        <p className={subtitle({ class: "mb-12 max-w-2xl" })}>
          Professional-grade pill management tools designed with your health and safety in mind.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="block">
              <Card className="py-4 hover:cursor-pointer hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <div className="flex justify-between items-start w-full mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-default-500 text-sm mt-1">{product.description}</p>
                    </div>
                    <Chip color="secondary" variant="flat" size="sm">
                      {product.badge}
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <Image
                        alt={product.name}
                        className="object-cover rounded-xl"
                        src={product.images[product.currentImage - 1]}
                      />
                      <div className="flex gap-2 mt-4 justify-center">
                        {[1, 2, 3].map((num) => (
                          <button
                            key={num}
                            onClick={(e) => {
                              e.preventDefault();
                              product.setImage(num);
                            }}
                            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${product.currentImage === num
                              ? "border-primary"
                              : "border-transparent hover:border-default-300"
                              }`}
                          >
                            <Image
                              src={product.images[num - 1]}
                              alt={`${product.name} view ${num}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <Divider />

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-success text-lg mt-0.5">✓</span>
                            <span className="text-sm text-default-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between items-center px-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-default-400 line-through">{product.originalPrice}</span>
                  </div>
                  <button
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(product.link, '_blank');
                    }}
                  >
                    Order Now
                  </button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};