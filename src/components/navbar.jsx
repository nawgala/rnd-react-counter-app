import React, { Component } from "react";

//Stateless Functional Component
const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-info m-2">{totalCount}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-info m-2">
//             {this.props.totalCount}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
