"use client";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const AddToCartBtn = ({ productItem }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const handleAddToCart = (productItem) => {
    dispatch(addToCart(productItem));
  };

  const handleRemoveFromCart = (productItem) => {
    dispatch(removeFromCart(productItem));
  };
  return (
    <button
      type="button"
      onClick={() => {
        cart?.cartItems.some((item) => item.id === productItem.id)
          ? handleRemoveFromCart(productItem)
          : handleAddToCart(productItem);
      }}
      className="bg-rose-300 
    hover:bg-rose-400 text-black font-bold py-2 px-4 rounded"
    >
      {cart?.cartItems.some((item) => item.id === productItem.id)
        ? "Remove from cart"
        : "Add to cart"}
    </button>
  );
};
export default AddToCartBtn;
