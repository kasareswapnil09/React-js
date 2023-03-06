import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from './components/Details';
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import { API_URL } from './config';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }

    };

    fetchData();
  }, []);

  //   fetch(`${API_URL}/posts`)
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.log(error));
  // }, []);

  console.log(data);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <legend>Hello world!</legend>
    </>
  );
}

export default App;
