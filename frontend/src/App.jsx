import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeEnablePage from "./pages/WhatWeEnablePage";
import ImpactPage from "./pages/ImpactPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/what-we-enable" element={<PageWrapper><WhatWeEnablePage /></PageWrapper>} />
        <Route path="/impact" element={<PageWrapper><ImpactPage /></PageWrapper>} />
        <Route path="/get-involved" element={<PageWrapper><GetInvolvedPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
