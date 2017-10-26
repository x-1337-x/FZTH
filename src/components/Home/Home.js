import React, { Component } from 'react';

import Cart from '../Cart/Cart';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO OUR WHATEVER</h1>
        <Cart />
      </div>
    )
  }
}

export default Home;