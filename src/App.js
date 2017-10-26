import React, { Component } from 'react';
import {
  withRouter,
  Redirect,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

import {logIn} from './actions/login'

import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

class App extends Component {

  handleLogin = (e) => {
    e.preventDefault();
    this.props.logIn(true)
  }

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logIn(false)
    this.props.history.push('/')
  }

  render() {
    const {loggedIn} = this.props;
    return (
      <div className="App" style={{position: 'relative'}}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">products</Link>
          <Link to="/products/asd">Some product</Link>
          {loggedIn && (<Link to="/products/add">Add</Link>)}
          {loggedIn ?
            (<a href="" onClick={this.handleLogOut}>Log Out</a>)
            :
            (<a href="" onClick={this.handleLogin}>Log In</a>)
          }
          <Link to="/checkout">checkout</Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Switch>
            <Route exact path="/products/add" render={() => (loggedIn ? (<div>Add</div>) : (<Redirect to="/"/>))} />
            <Route exact path="/products/:id" render={() => (<div>A Product</div>)} />
          </Switch>
          <Route exact path="/login" render={() => (<div>login</div>)} />
          <Route exact path="/checkout" render={() => (<div>checkout</div>)} />
        </div>
        <Cart />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
};

const dispatchToProps = dispatch => ({
  logIn(data) {
    dispatch(logIn(data));
  }
});

export default withRouter(connect(mapStateToProps, dispatchToProps)(App));
