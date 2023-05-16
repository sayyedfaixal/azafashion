const initialState = {
  carts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "DELETE_FROM_CART":
      const newData = state.carts.filter(
        (item) => item.productId !== action.payload.productId
      );
      return {
        ...state,
        carts: newData,
      };
    case "CLEAR_DATA":
      return initialState;
    // case "UPDATE_MAIN_IMG":
    //   state.carts.forEach((cart) => {
    //     console.log("----------------------------------------------", cart);
    //     const index = cart.allImgsList.indexOf(action.payload.image);
    //     if (index !== -1) {
    //       const mainImgUrl = cart.mainImgUrl;
    //       cart.mainImgUrl = cart.allImgsList[index];
    //       cart.allImgsList[index] = mainImgUrl;
    //     }
    //     debugger;
    //   });
    //   return state;
    default:
      return state;
  }
};
