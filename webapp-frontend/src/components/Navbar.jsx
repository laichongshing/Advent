import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Brand" src="..." />
          </a>
        </div>
      </div>
    </nav>
  );
}