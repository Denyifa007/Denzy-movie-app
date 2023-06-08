import React from 'react'
import './Navbar.css'
import notification from '../../icons/—Pngtree—vector notification icon_4143927.png'
import searchicon from '../../icons/Search (1).png'
import profileimg from '../../images/76785.jpg'

const Navbar = () => {
  return (
    <div className='MainNavbar'>
        <div className='itemContainers'>
            <div className='serchItems'>
                <img src={searchicon} className='searchicon' alt="" />
                <input type="search" className='searchbar'placeholder='Search' />

            </div>
           
            <div className='profileContainer'>
                <img src={notification} alt="" className='notification' />
            <img src={profileimg} alt="" className='profileimg' />
                <p className='profilename'>Denyifa</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar