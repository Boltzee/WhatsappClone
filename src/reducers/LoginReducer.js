export default const LoginReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state;
            // break;
        default:
            return state;
            // break;
    }
}