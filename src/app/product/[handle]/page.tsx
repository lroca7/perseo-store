import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const parameters = await searchParams;
  const id = parameters.id;
  const products = await getProducts(id);
  const product = products[0];

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  console.log(product);
  if (!id) {
    redirect("/store");
  }
  return <ProductView product={product} />;
}
