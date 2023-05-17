import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingSite from "./views/LandingSite";
import Nav from "./components/Nav.js";
import Foods from "./views/Foods";
import About from "./views/About";
import { useState } from "react";
import Login from "./views/Login";

export default function App() {
  const [data, setData] = useState();
  const [noteData, setNoteData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                {" "}
                <Nav
                  data={data}
                  setData={setData}
                  note={noteData}
                  setNote={setNoteData}
                />{" "}
                <LandingSite />{" "}
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/menu"
            element={
              <>
                <Nav
                  data={data}
                  setData={setData}
                  note={noteData}
                  setNote={setNoteData}
                />
                <Foods data={data} note={noteData} setNote={setNoteData} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
