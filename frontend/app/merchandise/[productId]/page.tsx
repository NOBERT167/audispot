// app/products/[productId]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExtendedProduct } from "@/app/lib/types";
import { enhancedProducts } from "@/app/lib/constants";

// Generate static params for all products
export async function generateStaticParams() {
  return enhancedProducts.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = enhancedProducts.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-6xl mx-auto">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-96 w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="heading">{product.name}</h1>
                <p className="textNormal text-2xl font-bold mt-2">
                  Ksh {product.price}
                </p>
              </div>

              <div>
                <p className="textNormal opacity-90">{product.description}</p>
              </div>

              <div>
                <h3 className="subHeading mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="textNormal opacity-80 flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {product.materials && (
                <div>
                  <h3 className="subHeading mb-2">Materials</h3>
                  <p className="textNormal opacity-80">{product.materials}</p>
                </div>
              )}

              {product.careInstructions && (
                <div>
                  <h3 className="subHeading mb-2">Care Instructions</h3>
                  <p className="textNormal opacity-80">
                    {product.careInstructions}
                  </p>
                </div>
              )}

              <Button className="w-full secondaryBtn mt-6">
                <Link
                  href={`https://wa.me/254715623803?text=Hello%20i%20am%20interested%20in%20${product.name}`}
                  target="_blank"
                  className="w-full h-full flex items-center justify-center"
                >
                  Order Now via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
