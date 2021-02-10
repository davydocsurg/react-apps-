import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark shadow-sm text-white fixed-top">
        <a className="navbar-brand">Navbar</a>
        <span className="badge badge-pill badge-warning">
          Total Counter: {this.props.total}
        </span>
      </nav>
    );
  }
}

export default Navbar;

// // Stateless Functional Component -> function components
// const NavBar = () => {

//   return (
//     <nav className="navbar navbar-dark bg-dark text-white">
//       <p className="navbar-brand">Navbar</p>
//       <span className="badge badge-pill badge-warning">{this.props.total}</span>
//     </nav>
//   );
// };

// export default NavBar;
