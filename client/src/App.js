import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { QueryParamProvider } from 'use-query-params';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Nav from './components/Nav';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import UserDash from './pages/UserDash';
import Jordan from './pages/Jordan';
import Nike from './pages/Nike';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Subscription from './pages/Subscription';
import Featured from './pages/Featured';
import Shoes from './pages/Shoes';
import Footer from './components/Footer';
import './App.css';

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
        <QueryParamProvider ReactRouterRoute={Route}>
          <StoreProvider>
            <Nav />
            <Switch className="components">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard" component={Admin} />
              <Route exact path="/shoes/:sku" component={Detail} />
              <Route exact path="/shoes" component={Shoes} />
              <Route exact path="/jordan" component={Jordan} />
              <Route exact path="/nike" component={Nike} />
              <Route exact path="/featured" component={Featured} />
              <Route exact path="/subscription" component={Subscription} />
              <Route exact path="/cart" component={Cart} />
              {/* <Route exact path="/success" component={Success} /> */}
            </Switch>
            <Footer />
          </StoreProvider>
        </QueryParamProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
