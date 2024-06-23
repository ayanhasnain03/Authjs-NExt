"use client";
import { useSelector } from "react-redux";

const CartComponent = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="container mx-auto mt-10">
      {cart?.cartItems?.map((item) => (
        <div className="sm:flex shadow-md my-10">
          <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cart?.cartItems.length}
              </h2>
            </div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={item.thumbnail}
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  {item.title}
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>{item.price}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartComponent;
