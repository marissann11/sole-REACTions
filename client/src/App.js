import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import io from 'socket.io-client'

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import Featured from "./pages/Featured";
import Shoes from "./pages/Shoes";
import Footer from "./components/Footer";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const socket = io.connect("http://localhost:3002")

function App() {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message })
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
    alert(data.message)
    })
  }, [socket]);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Switch className="components">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/shoes/:id" component={Detail} />
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/subscription" component={Subscription} />
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path="/success" component={Success} /> */}
        </Switch>
        <div>
          <input placeholder="Message..." />
          <button onClick={sendMessage}>Send Message</button>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
