import React, { useState } from "react";
import { Button, Container, Form, InputGroup, Row, Col, Navbar, Card, Nav } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handlePhoneChange = (e) => {
    const re = /^\d{0,10}$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  const handleNameChange = (e) => {
    const re = /^[A-Za-z\s]*$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> My Portfolio </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <Nav.Link href="/contact"> Contact </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt=5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title> Contact Me </Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label> Name </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={handleNameChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid name (letters only).
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="formEmail">
                    <Form.Label> Email address </Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formCountry">
                    <Form.Label> Country Code </Form.Label>
                    <Form.Control
                      as="select"
                      value={countryCode}
                      required
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+1">(United States)</option>
                      <option value="+91">(India)</option>
                      <option value="44">(United Kingdom)</option>
                      <option value="61">(Australia)</option>
                      <option value="+1">(Canada)</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please select a country code.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formPhone">
                    <Form.Label> Phone Number </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>{countryCode}</InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid phone number (numbers only).
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formGender">
                    <Form.Label> Gender </Form.Label>
                    <div>
                      <Form.Check
                        required
                        type="radio"
                        label="Male"
                        name="gender"
                        id="male"
                      />
                      <Form.Check
                        required
                        type="radio"
                        label="Female"
                        name="gender"
                        id="female"
                      />
                      <Form.Check
                        required
                        type="radio"
                        label="Others"
                        name="gender"
                        id="others"
                      />
                    </div>
                    <Form.Control.Feedback type="invalid">
                      Please select your gender.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                      <option>India</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>United Kingdom</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please select your country.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
