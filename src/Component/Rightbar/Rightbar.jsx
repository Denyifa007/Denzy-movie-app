import React from 'react'
import './Rightbar.css'
import img1 from '../../images/abiodun tech.jpeg'
import img2 from '../../images/finegirl praise.jpeg'
import img3 from '../../images/oyinda.jpeg'
import img4 from '../../images/tunde.jpeg'
import img5 from '../../images/WhatsApp Image 2022-12-23 at 12.08.47 (2).jpeg'
import img6 from '../../images/WhatsApp Image 2022-12-23 at 12.08.47 (3).jpeg'
import img7 from '../../images/WhatsApp Image 2023-02-13 at 15.11.32.jpeg'

const Rightbar = () => {
  return (
    <div className='rightbarMainContainer'>
        <div style={{marginTop:'160px'}}>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img1} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img2} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img3} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img4} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img5} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img6} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
          <div style={{marginLeft:'6px', paddingTop:"30px"}}>
            <img src={img7} alt="" className='profileimg' />
            <div className='dott'></div>
          </div>
        </div>

    </div>
  )
}

export default Rightbar