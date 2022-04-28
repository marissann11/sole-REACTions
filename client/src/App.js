import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useMutation,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_ORDERS } from './utils/queries';

import Nav from './components/Nav';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Subscription from './pages/Subscription';
import Featured from './pages/Featured';
import Footer from './components/Footer';
import './App.css';

// useEffect(() => {
//   fetchSales = async () => {
//     const { res } = await fetch(queryOrders);
//   };
//   fetchSales();
// }, []);

// reducer function const getSales = () => {...reducer}
// total sales sent to chart.js

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch className="components">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/shoes/:id" component={Detail} />
            <Route exact path="/featured" component={Featured} />
            <Route exact path="/subscription" component={Subscription} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route exact path="/success" component={Success} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
