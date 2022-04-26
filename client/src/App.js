import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cart />
      <Dashboard />
      <Detail />
      <Login />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
