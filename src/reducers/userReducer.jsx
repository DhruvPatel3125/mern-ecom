const initialState = {
    loading: false,
    success: false,
    error: null,
    currentUser: null
};

export const registerNewUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                currentUser: action.payload
            };
        case 'USER_REGISTER_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};