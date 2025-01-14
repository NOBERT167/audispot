"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}
interface reactWhatsap {
  number: string;
  message: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "White Audi T-shirt",
    price: "1,200",
    imageUrl: "/Assets/Products/T-Shirt Front.jpg",
  },
  {
    id: "2",
    name: "White Audi Hoodie",
    price: "2,500",
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
  {
    id: "5",
    name: "Black Audi Zipped Hoodie",
    price: "2,500",
    imageUrl: "/Assets/Products/Black--Zipped--Hoodie.jpg",
  },
  {
    id: "6",
    name: "White Audi Zipped Hoodie",
    price: "2,500",
    imageUrl: "/Assets/Products/White--Zipped--Hoodie.jpg",
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }: any) => (
  <Card className="h-full flex flex-col">
    <div className="relative h-72 w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <CardContent className="flex-grow px-2 py-0">
      <h3 className="subHeading">{product.name}</h3>
      <p className="textNormal opacity-70">
        Ksh {product.price.toLocaleString()}
      </p>
    </CardContent>
    <CardFooter className="p-2">
      <Button
        className="w-full secondaryBtn"
        onClick={() => console.log(`Ordered ${product.name}`)}
      >
        <Link
          href={`https://wa.me/254715623803?text=Hello%20i%20am%20interested%20in%20${product.name}`}
          target="_blank"
        >
          Order Now
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading text-center">Audi Apparel – Wear Your Passion</h1>
      <h3 className="textNormal text-center pb-4">
        Express your love for Audi with our exclusive collection of hoods,
        t-shirts, and caps. Whether you're at a car meet or just hanging out,
        look your best in high-quality gear.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
