import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, FavouritesPage, PortfolioPage, NotFoundPage } from "./pages"
import { NavBar } from "./components/NavBar";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.css"


function App() {
  return (
    <div className="App">
      <b>Kriptolio</b>
      <br />
      Crypto Portfolio Tracker
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
            <Route path="/favourites" exact element={<FavouritesPage />} />
            <Route path="/portfolio" exact element={<PortfolioPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
