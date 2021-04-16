/*import React from 'react';
import Products from './Products';
import UserForm from './UserForm';
function App() {
  return (
    <div className="App">
      <UserForm/>
      <Products />
    </div>
  );
}
export default App;*/

import React, { Component } from 'react';
import GitHub from './GitHub';
class App extends Component {
  render() {
    return (
      <div>
        <GitHub />
      </div>
    );
  }
}
export default App;