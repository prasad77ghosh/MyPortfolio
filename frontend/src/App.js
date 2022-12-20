import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
      </div>
    </>
  );
}


export default App;
