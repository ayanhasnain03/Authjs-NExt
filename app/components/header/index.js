"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex py-4 px-4  min-h-[70px] ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/">Shoping Cart</Link>
      </div>
      <div>
        <ul className="flex gap-4 mt-5">
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <button className="bg-rose-300 hover:bg-rose-400 text-black font-bold py-1 px-4 rounded-md">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
