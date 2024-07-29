import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestLayout from "./components/TestLayout";
import TestLayoutForm from "./components/TestLayoutForm";
import TestSelect from "./components/TestSelect";

const App = () => {
  return (
    <div className="max-w-[1230px] mx-auto">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-layout" element={<TestLayout />} />
          <Route path="/test-layout-form" element={<TestLayoutForm />} />
          <Route path="/test-select" element={<TestSelect />} />
        </Routes>
      </Router>
    </div>
  );
};

const Home = () => (
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold underline">Welcome!</h1>
  </div>
);

export default App;
