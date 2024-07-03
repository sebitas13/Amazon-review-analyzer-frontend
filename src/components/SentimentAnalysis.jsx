import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./styles.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
);

export const SentimentAnalysis = ({ analisis }) => {
  const data = analisis;
  const sentimentCounts = data.reduce(
    (acc, { sentimiento }) => {
      acc[sentimiento]++;
      return acc;
    },
    { positivo: 0, negativo: 0, neutral: 0 }
  );

  const topicSentimentCounts = data.reduce((acc, { sentimiento, topico }) => {
    if (!acc[topico]) {
      acc[topico] = { positivo: 0, negativo: 0, neutral: 0 };
    }
    acc[topico][sentimiento]++;
    return acc;
  }, {});

  const doughnutData = {
    labels: ["Positivo", "Negativo", "Neutral"],
    datasets: [
      {
        label: "Sentimientos",
        data: [
          sentimentCounts.positivo,
          sentimentCounts.negativo,
          sentimentCounts.neutral,
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
  };

  const barData = {
    labels: Object.keys(topicSentimentCounts),
    datasets: [
      {
        label: "Positivo",
        data: Object.keys(topicSentimentCounts).map(
          (key) => topicSentimentCounts[key].positivo
        ),
        backgroundColor: "#36A2EB",
      },
      {
        label: "Negativo",
        data: Object.keys(topicSentimentCounts).map(
          (key) => topicSentimentCounts[key].negativo
        ),
        backgroundColor: "#FF6384",
      },
      {
        label: "Neutral",
        data: Object.keys(topicSentimentCounts).map(
          (key) => topicSentimentCounts[key].neutral
        ),
        backgroundColor: "#FFCE56",
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Col xs={12} xl={6}>
          <h2 className="form-text-color text-center mt-5">
            Distribución de Sentimientos
          </h2>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </Col>
        <Col xs={12} xl={6}>
          <h2 className="form-text-color text-center mt-5">
            Sentimientos por Tópico
          </h2>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Bar
              data={barData}
              options={{
                scales: { x: { stacked: true }, y: { stacked: true } },
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
