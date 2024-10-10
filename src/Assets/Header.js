import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rankmeone Ai</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
  Home
</Link>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar-nav .nav-item {
          margin: 0 1rem; /* Adjust spacing for non-collapsed view */
          
        }
        

        .navbar-nav .nav-link {
          padding: 0.5rem 1rem; /* Adjust padding to create space inside each nav item */
        }

        @media (max-width: 992px) { /* Adjust the breakpoint as needed */
          .navbar-nav .nav-item {
            margin: 0; /* Reset spacing for collapsed view */
          }

          .navbar-nav .nav-link {
            padding: 0.5rem; /* Adjust padding for collapsed view */
          }
        }
      `}</style>
    </div>
  )
}