import React from 'react'
import '../Components/logo.css'

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };


  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href="/" className="logo d-flex align-items-center">
        {/* <img src="" alt=""/> */}
        <span className='d-none d-lg-block'>DashboardApp</span>
        </a>
        <i
          className='bi bi-list toggle-slidebar-btn'
          onClick={handleToggleSideBar}
          ></i>

    </div>
  )
}

export default Logo