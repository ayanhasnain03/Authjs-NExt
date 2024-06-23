import { fetchProductDetails } from "@/actions";
import AddToCartBtn from "../components/add-to-cart-button/AddToCartBtn";

async function ProductDetails({ params }) {
  const getProductDetails = await fetchProductDetails(params.details);

  return (
    <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
      <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
        <div className="relative w-full md:w-48 flex justify-center items-center">
          <img
            src={getProductDetails.data.thumbnail}
            className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            alt="product image"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
              {getProductDetails.data.title}
            </h1>
            <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
              ${getProductDetails.data.price}
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
              {getProductDetails.data.description}
            </div>
          </div>

          <div className="flex mb-4 text-sm font-medium mt-8">
            <AddToCartBtn productItem={getProductDetails.data} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
