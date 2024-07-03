import React from "react";
import Container from "react-bootstrap/Container";
import "./styles.css";

export const Footer = () => {
  return (
    <>
      <Container fluid className="py-4 backgroud-footer">
        <footer className="backgroud-footer">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Review</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link px-2 text-muted">Half-Life 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-muted">Half-Life Alyx</a>
            </li>
            <li className="nav-item">
              <a href="https://store.steampowered.com/" target="_blank" className="nav-link px-2 text-muted">Steam</a>
            </li> */}
          </ul>
          <p className="text-center text-muted">&copy; 2024 Grupo 01</p>
        </footer>
      </Container>
    </>
  );
};
