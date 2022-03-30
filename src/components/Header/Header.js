import React from "react";
import './header.css';
import logo from '../../Logo.png'


function Header() {
  return (
    <div>
      <img src={logo} />
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Products</a>
        </li>
      </ul>
    </div>
  )
};

export default Header;