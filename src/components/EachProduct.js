import { useDispatch } from "react-redux";
import { useState } from "react";
import { DELETE_FROM_CART } from "../redux/actions/action";

const EachProduct = ({ eachProduct }) => {
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(eachProduct.mainImgUrl);
  const [allImages, setAllImages] = useState([eachProduct.allImgsList]);
  console.log("Main Image : ", mainImage);
  console.log("All Image : ", allImages[0]);
  const handleImageClick = (clickedImageUrl) => {
    setMainImage(clickedImageUrl);
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
                  src={mainImage}
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
