"use server";

//get All Products

export async function fetchAllproducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function fetchProductDetails(currentId) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${currentId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
