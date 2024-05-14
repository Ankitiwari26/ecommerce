import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HomePage = () => {
  const scheduleArr = [
    {
      date: "15/5/2024",
      venue: "Bhopal",
    },
    {
      date: "18/6/2024",
      venue: "Bhopal",
    },
    {
      date: "12/2/2024",
      venue: "Bhopal",
    },
  ];

  return (
    <>
      <div className="aboutHeader">
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
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      </div>
      <div className="headingTitle">
        <h1>The Shoper's</h1>
      </div>
      <div>
        {scheduleArr.map((schedule, index) => (
          <div key={index} className="table">
            <Container>
              <Row>
                <Col>{schedule.date}</Col>
                <Col xs={6}>{schedule.venue} (wider)</Col>
                <Col>
                  <Button variant="primary">Primary</Button>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>
      <div className="footer">
        <h1>The Shoper's</h1>
        <div className="socialmedia">
          <a href="https://www.youtube.com/@SharpenerTech">YouTube</a>
          <a href="https://en.wikipedia.org/wiki/India">WikiPedia</a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
