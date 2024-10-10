import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className=" text-white text-center py-4" style={{backgroundColor:'#153930'}}>
        <div className="container">
          <p>&copy; 2024 Rankmeone. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
