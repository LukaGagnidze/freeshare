import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Main Components/HomePage";
import ItemDetails from "./components/Main Components/ItemDetails";
import ItemPage from "./components/Main Components/ItemPage";
import Registration from "./components/Main Components/Registration";
import SignIn from "./components/Main Components/SignIn";
import UploadPage from "./components/Main Components/UploadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/items" element={<ItemPage />}></Route>
      <Route path="/items/:id" element={<ItemDetails />}></Route>
      <Route path="/signup" element={<Registration />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/upload" element={<UploadPage />}></Route>
    </Routes>
  );
}

export default App;
