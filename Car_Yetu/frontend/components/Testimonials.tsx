import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    content:
      "The parts fit perfectly, and the quality is top-notch. My Audi runs like new!",
    avatarUrl: "/api/placeholder/32/32",
  },
  {
    id: 2,
    name: "Bob Smith",
    content:
      "I love the t-shirts! Super comfortable, and they represent my passion for Audi perfectly.",
    avatarUrl: "/api/placeholder/32/32",
  },
  {
    id: 3,
    name: "Carol Davis",
    content: "The hoods are so amazing super comfy!",
    avatarUrl: "/api/placeholder/32/32",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <Card className="shadow-lg h-full">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <Avatar className="h-20 w-20 mr-4">
          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
          <AvatarFallback className="text-2xl font-medium">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="subHeading">{testimonial.name}</h3>
        </div>
      </div>
      <p className="textNormal">{testimonial.content}</p>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
