import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";

function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
    </Routes>
  );
}

export default App;
