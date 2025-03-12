import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  try {
    const response = await axios.get("/api/products/getallproducts");
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAILED", payload: error.message });
  }
};

export const getProductById = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST" });

  try {
    console.log("Fetching product with ID:", id);
    const response = await axios.get(`/api/products/getproductbyid/${id}`);
    console.log("Product data received:", response.data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("Error fetching product:", error);
    dispatch({ 
      type: "GET_PRODUCT_FAILED", 
      payload: error.response?.data?.message || error.message 
    });
  }
};
