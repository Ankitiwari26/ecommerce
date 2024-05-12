import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ModalUI from "../../UI/ModalUI";
import { useState } from "react";

const numberOfCartItem = 5;
function Header() {
  const [modalShow, setModalShow] = useState(false);

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
