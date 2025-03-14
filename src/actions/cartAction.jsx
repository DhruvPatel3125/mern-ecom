import axios from "axios";

export const addtocart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantity,
  };

  const cartItems = getState().cartReducer.cartItems;
  const existItem = cartItems.find((x) => x._id === cartItem._id);

  if (existItem) {
    // Update the quantity of the existing item
    dispatch({
      type: "ADD_TO_CART",
      payload: cartItems.map((x) =>
        x._id === existItem._id ? { ...x, quantity: quantity } : x
      ),
    });
  } else {
    // Add new item to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: [...cartItems, cartItem],
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
};

export const deleteFromCart = (productId) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems.filter((item) => item._id !== productId);

  dispatch({
    type: "DELETE_FROM_CART",
    payload: cartItems,
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

