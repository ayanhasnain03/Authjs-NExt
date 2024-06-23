import { fetchAllproducts } from "@/actions";
import Image from "next/image";
import ProductCard from "./components/productCart/page";

export default async function Home() {
  const getAllProducts = await fetchAllproducts();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {getAllProducts &&
          getAllProducts?.data?.map((productItem) => (
            <ProductCard item={productItem} />
          ))}
      </div>
    </div>
  );
}
