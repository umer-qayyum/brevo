import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Verify from './components/Verify';

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/verify" element={<Verify/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
