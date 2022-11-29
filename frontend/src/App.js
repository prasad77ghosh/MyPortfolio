import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
