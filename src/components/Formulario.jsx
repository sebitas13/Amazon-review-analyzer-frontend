import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "../hooks/useForm";
import "./styles.css";
import Spinner from "react-bootstrap/esm/Spinner";

export const Formulario = ({ onSubmit }) => {
  const initialState = {
    url: "",
    numReviews: "",
    country: "US",
  };

  const { url, numReviews, country, handleInput, handleReset } =
    useForm(initialState);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await onSubmit(url, numReviews, country);
    setLoading(false);

    //handleReset();
  };

  return (
    <Container style={{ maxWidth: "500px" }} className=" p-5 backgroud-form ">
      <Row>
        <Col>
          <Form className="form-text-color fw-bold" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formURL">
              <Form.Label>Asin o URL</Form.Label>
              <Form.Control
                type="text"
                name="url"
                value={url}
                onChange={handleInput}
                placeholder="Enter url"
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNum">
              <Form.Label>Number of reviews:</Form.Label>
              <Form.Control
                type="number"
                name="numReviews"
                value={numReviews}
                onChange={handleInput}
                placeholder="reviews..."
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Country:</Form.Label>
              <Form.Select
                aria-label="Select a country"
                name="country"
                value={country}
                onChange={handleInput}
                disabled={loading}
              >
                <option value="US">USA</option>
                <option value="ES">Spain</option>
                <option value="MX">Mexico</option>
                <option value="CN">China</option>
                <option value="JP">Japon</option>
              </Form.Select>
            </Form.Group>

            <Button className="mt-3" variant="secondary" type="submit">
              {loading ? (
                <>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
