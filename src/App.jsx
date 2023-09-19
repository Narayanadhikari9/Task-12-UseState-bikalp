import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
