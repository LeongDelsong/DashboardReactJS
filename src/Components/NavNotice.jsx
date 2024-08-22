import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
            <i className='be bi-bell'></i>
            <span className='badge bg-primary badge-nunber'>2</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                You have 4 new notifications
                <a href='#'>
                <span className='badge rounded-pill bg-primary p-2 ms-2'>
                    View all
                </span>
                </a>
            </li>
            <li>
                <hr className='dropdowm-divider' />
            </li>

            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Lorem ipsum</h4>
                    <p>Quouo illo ullam  maxime accusamus iste.</p>
                    <p>1 hr. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider' />
            </li>

            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Lorem ipsum</h4>
                    <p>Quouo illo ullam  maxime accusamus iste.</p>
                    <p>4 hr. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider' />
            </li>
            <li className='dropdown-footer'>
                <a href='#'>Show all notifications</a>
            </li>
    
        </ul>
    </li>
  )
}

export default NavNotice