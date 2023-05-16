import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RenderList.css";
import { ADD_TO_CART } from "../redux/actions/action";
const RenderList = ({ data }) => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);

  // Get Data from the store and check if the product with the specific size is already present
  const getData = useSelector((state) => state.cartReducer.carts);
  const selectedSizes = getData.map(
    (product) => product.selectedSizeByUser.productSize
  );
  const selectedProductId = getData.map(
    (product) => product.selectedSizeByUser.productId
  );

  const [selectedSizeAndProductByUser, setSelectedSizeAndProductByUser] =
    useState({
      productId: "",
      productSize: "",
    });

  const handleSizeClick = (
    currentSelectedProductId,
    currentSelectedProductSize
  ) => {
    setSelectedSizeAndProductByUser((prevState) => ({
      ...prevState,
      productId: currentSelectedProductId,
      productSize: currentSelectedProductSize,
    }));
    setIsClicked(true);
  };

  const handleAddToCart = ({
    productId,
    title,
    brandName,
    price,
    sizes,
    mainImgUrl,
    allImgsList,
    discountPercentage,
    selectedSizeAndProductByUser,
  }) => {
    const currentData = selectedSizeAndProductByUser;
    if (currentData.productId !== "" && currentData.productSize !== "") {
      if (
        selectedSizes.includes(currentData.productSize) &&
        selectedProductId.includes(currentData.productId)
      ) {
        alert("Product Already present in the Cart");
      } else {
        dispatch(
          ADD_TO_CART(
            productId,
            title,
            brandName,
            price,
            sizes,
            mainImgUrl,
            allImgsList,
            discountPercentage,
            selectedSizeAndProductByUser
          )
        );
      }
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  return (
    <div className="product-list">
      {data ? (
        data.map(
          ({
            productId,
            title,
            brandName,
            price,
            sizes,
            mainImgUrl,
            allImgsList,
            discountPercentage,
          }) => (
            <div className="product-item" key={productId}>
              <div className="product-image">
                <img src={mainImgUrl} alt={title} />
                <div className="size-box">
                  {sizes.map((size, index) => (
                    <button
                      className={isClicked ? "size-btn clicked" : "size-btn"}
                      // className="size-btn"
                      key={index}
                      onClick={() => handleSizeClick(productId, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="product-details">
                <h4 className="product-title">{title}</h4>
                <span className="product-brand">
                  <p>{brandName}</p>
                </span>
                <p className="product-price"> &#8377; {price}</p>
              </div>
              <p>Select size on image before adding item to the cart</p>
              {selectedSizeAndProductByUser.productSize === "" &&
              productId !== selectedSizeAndProductByUser.productId ? (
                <button
                  className="add-to-cart"
                  style={{ cursor: "not-allowed" }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="add-to-cart"
                  onClick={() =>
                    handleAddToCart({
                      productId,
                      title,
                      brandName,
                      price,
                      sizes,
                      mainImgUrl,
                      allImgsList,
                      discountPercentage,
                      selectedSizeAndProductByUser,
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          )
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RenderList;
