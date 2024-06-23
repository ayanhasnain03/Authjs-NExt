"use client";

import { useRouter } from "next/navigation";

const ProductCard = ({ item }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/${item?.id}`);
  };

  return (
    <div>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={item.thumbnail}
            alt="Product Image"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-medium mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${item.price}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
            <button
              onClick={handleDetailsClick}
              className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            >
              Details
            </button>
            <button className="bg-rose-300 hover:bg-rose-400 text-black font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
