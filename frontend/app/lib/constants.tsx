import { ExtendedProduct, Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "White Audi T-shirt",
    price: "1,200",
    imageUrl: "/Assets/Products/T-Shirt Front.jpg",
  },
  {
    id: "2",
    name: "White Audi Hoodie",
    price: "3,000",
    imageUrl: "/Assets/Products/Hoodie Front.jpg",
  },
  {
    id: "3",
    name: "White Audi Water Bottle",
    price: "1,200",
    imageUrl: "/Assets/Products/Water Bottle White.jpg",
  },
  {
    id: "4",
    name: "Black Audi Water Bottle",
    price: "1,200",
    imageUrl: "/Assets/Products/Water Bottle Black.jpg",
  },
];

export const enhancedProducts: ExtendedProduct[] = [
  {
    id: "1",
    name: "White Audi T-shirt",
    price: "1,200",
    imageUrl: "/Assets/Products/T-Shirt Front.jpg",
    description:
      "Make a statement with this premium white Audi t-shirt, featuring the iconic four rings emblem. Designed for the true Audi enthusiast, this shirt combines comfort with sophisticated style, just like the cars that inspire it.",
    features: [
      "Premium cotton blend for superior comfort",
      "Distinctive Audi four rings logo",
      "Modern fit with subtle design elements",
      "Perfect for car meets and casual wear",
    ],
    materials: "90% Cotton, 10% Elastane",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "2",
    name: "White Audi Hoodie",
    price: "3,000",
    imageUrl: "/Assets/Products/Hoodie Front.jpg",
    description:
      "Embrace the spirit of Vorsprung durch Technik with our signature white Audi hoodie. This premium sweatshirt combines German engineering inspiration with contemporary street style.",
    features: [
      "Heavyweight cotton blend for durability",
      "Embroidered Audi logo",
      "Kangaroo pocket and adjustable hood",
      "Ribbed cuffs and waistband",
    ],
    materials: "80% Cotton, 20% Polyester",
    careInstructions: "Machine wash cold, do not iron on print",
  },
  {
    id: "3",
    name: "White Audi Water Bottle",
    price: "1,200",
    imageUrl: "/Assets/Products/Water Bottle White.jpg",
    description:
      "Stay hydrated in style with this premium Audi-branded water bottle. Designed with the same attention to detail as Audi vehicles we all love, this bottle is perfect for track days, car meets, or daily use.",
    features: [
      "Double-wall vacuum insulation",
      "24-hour cold retention",
      "Premium stainless steel construction",
      "Laser-etched Audi logo",
    ],
    materials: "18/8 Food-grade stainless steel",
    careInstructions: "Hand wash recommended",
  },
  {
    id: "4",
    name: "Black Audi Water Bottle",
    price: "1,200",
    imageUrl: "/Assets/Products/Water Bottle Black.jpg",
    description:
      "Sleek, sophisticated, and functional – this black Audi water bottle embodies the premium qualities of the brand. Perfect for those who appreciate both form and function.",
    features: [
      "Matte black premium finish",
      "Double-wall vacuum insulation",
      "Elegant Audi branding",
      "Leak-proof design",
    ],
    materials: "18/8 Food-grade stainless steel",
    careInstructions: "Hand wash recommended",
  },
];
