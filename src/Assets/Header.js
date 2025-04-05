import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Rankmeone Ai</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
           
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
