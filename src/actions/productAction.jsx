import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  try {
    const response = await axios.get("/api/products/getallproducts"); // ✅ Using provided API
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAILED", payload: error.message });
  }
};

export const getProductById = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST" });

  try {
    const response = await axios.get(`/api/products/getproductbyid/${id}`); // ✅ Using provided API
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCT_FAILED", payload: error.message });
  }
};
