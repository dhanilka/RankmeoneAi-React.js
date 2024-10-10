import React from 'react';
import Header from './Assets/Header';
import Footer from './Assets/Footer';
import './style.css'; // Make sure to import your custom CSS file
import AllTools from './all_tools';

export default function Home() {
  return (
    <div>
      {/* Header Component */}
    

      {/* Hero Section */}
      <section className="topcontainer text-center py-5">
        <div className="container">
          <h1 className="display-3 headrankmeone">Rankmeone AI</h1>
          <p className="lead">100% Free AI-powered tools to boost your online presence.</p>
        </div>
      </section>
<div className='pb-4'></div>
      {/* Features Section with Clickable Cards */}
     <AllTools/>

      {/* Footer Section */}
     <Footer/>
    </div>
  );
}
