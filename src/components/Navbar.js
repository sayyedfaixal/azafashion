import { useState } from "react";
import "./Navbar.css";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleCheckoutClick() {
    handleClose();
    console.log("Checkout Clicked");
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://static3.azafashions.com/skin/img/aza_logo.svg"
          alt="Aza Fashion"
        />
      </div>
      <div className="navbar-icon">
        <Badge
          badgeContent={getData.length}
          color="success"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i className="fa-sharp fa-solid fa-bag-shopping"></i>
        </Badge>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div
              className="cart-product-menu-details"
              style={{ margin: "5px 10px 10px" }}
            >
              <table>
                <thead>
                  <tr>
                    <th
                      className="thead-data"
                      style={{ padding: "10px", textDecoration: "underline" }}
                    >
                      Photo
                    </th>
                    <th
                      className="thead-data"
                      style={{ padding: "10px", textDecoration: "underline" }}
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((product) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <img
                              src={product.mainImgUrl}
                              alt="Main Image Url"
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </td>

                          <td>
                            <p>Title : {product.title}</p>
                            <p>
                              Price: {product.price} - Discount % :
                              {product.discountPercentage}
                            </p>
                            <p>
                              Size: {product.selectedSizeByUser.productSize}
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              <NavLink to="/cart">
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleCheckoutClick}
                >
                  Checkout
                </Button>
                <Button variant="outlined" color="error" onClick={handleClose}>
                  Close
                </Button>
              </NavLink>
            </div>
          ) : (
            <div className="card_details">
              <p style={{ fontSize: 15, padding: "5px" }}>Your cart is Empty</p>
              <i
                onClick={handleClose}
                className="fa fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              />
            </div>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
