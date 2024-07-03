import React from "react";
// import Container from 'react-bootstrap/Container';
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { ReviewPage } from "../page/ReviewPage";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <NavBar />
            <div className="container-fluid m-0 p-0">
              <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="review" element={<ReviewPage />} />
                <Route path="/*" element={<Navigate to={"/home/"} />} />
              </Routes>
            </div>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
