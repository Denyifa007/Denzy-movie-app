import React from 'react'
import './Home.css'
import Leftbar from '../Component/Leftbar/Leftbar'
import Maincontainer from '../Component/Maincontainer/Maincontainer'
import Rightbar from '../Component/Rightbar/Rightbar'

const Home = () => {
  return (
    <div className='mainContainerForHome'>
        <Leftbar/>
        <Maincontainer/>
        <Rightbar/>

    </div>
  )
}

export default Home