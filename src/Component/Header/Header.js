import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ModalUI from "../../UI/ModalUI";
import { useState } from "react";
import { useContext } from "react";
import { useCart } from "../Store/CartProvider";
// import CartContext from "../Store/cart-context";

// const numberOfCartItem = 5;
function Header() {
  // const cartCtxt = useContext(CartContext);

  const { cartContext } = useCart();

  const [modalShow, setModalShow] = useState(false);

  const numberOfCartItem = cartContext?.cartItems
    ? cartContext?.cartItems?.length
    : 0;
  console.log(numberOfCartItem, "prateek");

  const handleCartButtonClick = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    console.log("close");
    setModalShow(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Ecommerce Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Button
                variant="dark"
                className="cartbutton"
                onClick={handleCartButtonClick}
              >
                <h4>Cart</h4>
                {/* <span>{cartCtxt.message}</span> */}
                <div className="item_count">{numberOfCartItem}</div>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalUI show={modalShow} onHide={handleCloseModal} />
    </>
  );
}

export default Header;
