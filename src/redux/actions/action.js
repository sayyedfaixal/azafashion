export const ADD_TO_CART = (
  productId,
  title,
  brandName,
  price,
  sizes,
  mainImgUrl,
  allImgsList,
  discountPercentage,
  selectedSizeByUser
) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      productId,
      title,
      brandName,
      price,
      sizes,
      mainImgUrl,
      allImgsList,
      discountPercentage,
      selectedSizeByUser,
    },
  };
};

export const DELETE_FROM_CART = (productId) => {
  return {
    type: "DELETE_FROM_CART",
    payload: { productId },
  };
};

export const CLEAR_DATA = () => {
  return {
    type: "CLEAR_DATA",
  };
};

// export const UPDATE_MAIN_IMG = (currentExtraimage, currentMainImage) => {
//   return {
//     type: "UPDATE_MAIN_IMG",
//     payload: { currentExtraimage, currentMainImage },
//   };
// };
