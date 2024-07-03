import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Formulario } from "../components/Formulario";
import "./styles.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Reviews } from "../components/Reviews";
import { getReviewsWithAnalysis } from "../services/getReviews";
import { SentimentAnalysis } from "../components/SentimentAnalysis";

export const HomePage = () => {
  const [reviewsData, setReviews] = useState({});
  const [analysisData, setAnalysis] = useState([]);

  const handleFormSubmit = async (asin, number, country) => {
    const isUrl = asin.startsWith("http");
    const asinOk = isUrl ? extractAsinFromUrl(asin) : asin;

    const { analysis, reviews } = await getReviewsWithAnalysis(
      asinOk,
      number,
      country
    );

    setReviews({ ...reviews });
    setAnalysis([...analysis]);
  };

  // const data = [
  //   { sentimiento: "negativo", topico: "teclado" },
  //   { sentimiento: "positivo", topico: "producto" },
  //   { sentimiento: "neutral", topico: "teclado" },

  // ];

  return (
    <>
      <Container className="my-5 p-5  background-gray">
        <Row>
          <Col xs={12} lg={6}>
            <Formulario onSubmit={handleFormSubmit} />
          </Col>
          <Col xs={12} lg={6} style={{ height: "500px " }} className="m-0">
            <Reviews reviews={reviewsData} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            lg={12}
            // xl={5}

            // style={{ height: "500px " }}
          >
            <SentimentAnalysis analisis={analysisData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

function extractAsinFromUrl(url) {
  const match = url.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
  return match ? match[1] : null;
}
