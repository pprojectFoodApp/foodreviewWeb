import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/Auth/Login";
import Home from "../page/Home/Home";

export default function ROUTER() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
