export const getAllProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case "GET_PRODUCTS_REQUEST":
        return { loading: true, products: [] };
      case "GET_PRODUCTS_SUCCESS":
        return { loading: false, products: action.payload };
      case "GET_PRODUCTS_FAILED":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
export const getProductByIdReducer = (state = { product: null }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return { loading: true };
    case "GET_PRODUCT_SUCCESS":
      return { loading: false, product: action.payload };
    case "GET_PRODUCT_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
  