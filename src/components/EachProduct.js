import { useDispatch } from "react-redux";
import { useState } from "react";
import { DELETE_FROM_CART } from "../redux/actions/action";

const EachProduct = ({ eachProduct }) => {
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(eachProduct.mainImgUrl);
  const [allImages, setAllImages] = useState([eachProduct.allImgsList]);
  const handleImageClick = (clickedImageUrl) => {
    setAllImages((prevAllImages) => {
      const updatedAllImages = [...prevAllImages]; // Create a copy of the array
      console.log("updatedAllImages", updatedAllImages);
      const clickedImageIndex = updatedAllImages[0].indexOf(clickedImageUrl);
      debugger;
      if (clickedImageIndex !== -1) {
        updatedAllImages[clickedImageIndex] = mainImage; // Swap the clicked image with the main image
        setMainImage(clickedImageUrl); // Update the main image URL
      }
      return updatedAllImages;
    });
  };

  function handleDeleteProduct(deleteProductId) {
    dispatch(DELETE_FROM_CART(deleteProductId));
  }
  return (
    <div>
      <div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <div className="item-cart-details">
              <section className="cart-item extra-image">
                <ul className="extra-cart-image">
                  {eachProduct.allImgsList.map((currentImage, index) => (
                    <li
                      key={index}
                      style={{ margin: 10, listStyleType: "none" }}
                    >
                      <img
                        src={currentImage}
                        style={{ height: 100, cursor: "pointer" }}
                        alt="More Product"
                        onClick={() =>
                          handleImageClick(currentImage, eachProduct.mainImgUrl)
                        }
                      />
                    </li>
                  ))}
                </ul>
              </section>
              <section className="cart-item main-image">
                <img
                  src={eachProduct.mainImgUrl}
                  style={{ height: 540 }}
                  alt="Main Product"
                />
              </section>
              <section className="cart-item product-cart-details">
                <h1>
                  Product Details
                  <span
                    style={{
                      color: "red",
                      fontSize: "30px",
                      marginLeft: "50px",
                      cursor: "pointer",
                    }}
                  >
                    <i
                      className="fas fa-trash"
                      onClick={() => handleDeleteProduct(eachProduct.productId)}
                    />
                  </span>
                </h1>

                <h3>Title : {eachProduct.title}</h3>
                <h3>Brand Name: {eachProduct.brandName}</h3>
                <h3>Price: {eachProduct.price}</h3>
                <h3>Discount %: {eachProduct.discountPercentage}</h3>
                <hr />
                <h3>
                  Total Amount :{" "}
                  {eachProduct.price -
                    eachProduct.price * (eachProduct.discountPercentage / 100)}
                </h3>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EachProduct;
