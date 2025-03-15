import axios from "axios";

export const registerNewUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    try {
        const response = await axios.post("/api/users/register", user);
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_REGISTER_FAILED", payload: error.message });
    }
};

