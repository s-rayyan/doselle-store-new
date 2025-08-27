import { Card, CardBody, Chip } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Julie",
      location: "United States on May 1, 2025",
      rating: 4,
      review: "Not just practical but pretty and easy to use. The dose makes it easy to fill, find, open and close. I've had it in my purse and used it for months now and it has not cracked or scratched at all. It has been very useful in always having the meds I need with me while also keeping it discreet. Speaking of discreet, I don't always use the cover, I find myself using the cover for other things in my purse but it is still very practical.",
      product: "Pill Case",
      verified: true
    },
    {
      id: 2,
      name: "Marinna",
      location: "United States on April 9, 2025",
      rating: 5,
      review: "The Doselle Pink Small Pill Case with Silicone Pouch is ADORABLE! It arrived UNOPENED and never used, which is IMPORTANT to me when purchasing beauty/health items via online. The package of the two items is a great deal considering the majority of silicone beauty storage pouches the exact same size, sold on their own with no other included pieces, price for much more in cast. I love when things are priced accurately and not useless increased because they're cute!",
      product: "Doselle Pink Small Pill Case with Silicone Pouch",
      verified: true
    },
    {
      id: 3,
      name: "Jammie",
      location: "United States on January 9, 2025",
      rating: 5,
      review: "Well packaged. Made with high quality materials. The silicone case looks and feels amazing. Ample-space-in the-case for extra items! The organizer is spacious and easy to use. Large zipper allows for easy retrieval of items. Great for travelling! Can be used for pills and other small items, such as jewelry, pink and other essential items. Highly recommended!",
      product: "Travel Pill Organizer Box",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className={title({ size: "md", class: "mb-4" })}>
            What Our Customers Say
          </h2>
          <p className={subtitle({ class: "max-w-3xl mx-auto" })}>
            Don't just take our word for it - hear from thousands of satisfied customers 
            who trust Doselle for their medication management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="py-6 hover:scale-105 transition-all duration-300">
              <CardBody>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-default-500">{testimonial.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-lg">{renderStars(testimonial.rating)}</div>
                    {testimonial.verified && (
                      <Chip color="success" variant="flat" size="sm">
                        ✓ Verified
                      </Chip>
                    )}
                  </div>
                </div>
                
                <blockquote className="text-default-600 leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="mt-auto">
                  <Chip color="primary" variant="flat" size="sm">
                    {testimonial.product}
                  </Chip>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-default-100 rounded-full px-8 py-4 shadow-lg">
            <div className="text-3xl">⭐⭐⭐⭐⭐</div>
            <div>
              <p className="font-bold text-lg">4.9/5 Stars</p>
              <p className="text-sm text-default-500">Based on 2,847+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};