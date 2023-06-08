import React from 'react'
import './Leftbar.css'
import browser from '../../icons/Explore.png'
import Watchlist from '../../icons/heart.png'
import Comingsoon from '../../icons/calendar (2).png'
import Friend from '../../icons/friends (1).png'
import parties from '../../icons/friends.png'
import Settings from '../../icons/Settings.png'
import Logout from '../../icons/exit.png'
import Challenges from '../../images/1000015049.jpg'


const Leftbar = () => {
  return (
    <div className='leftbarMainContainer'>
        <h2 className='logoName'>Denzy <span className='dot'>.</span></h2>
        <div>
            <p className='menu'>Menu</p>
            <ul>
                <li>
                    <img src={browser} className='listicons' alt="" />
                    <p className='liListName'>Browser</p>
                </li>
                <li>
                    <img src={Watchlist} className='listicons' alt="" />
                    <p className='liListName'>Watchlist</p>
                </li>
                <li>
                    <img src={Comingsoon} className='listicons' alt="" />
                    <p className='liListName'>Coming soon</p>
                </li>
            </ul>
        </div>
        <div>
            <p className='menu'>Social</p>
            <ul>
                <li>
                    <img src={Friend} className='listicons' alt="" />
                    <p className='liListName'>Friends</p>
                </li>
                <li>
                    <img src={parties} className='listicons' alt="" />
                    <p className='liListName'>Parties</p>
                </li>
            </ul>
        </div>
        <div>
            <p className='menu'>General</p>
            <ul>
                <li>
                    <img src={Settings} className='listicons' alt="" />
                    <p className='liListName'>Setting</p>
                </li>
                <li>
                    <img src={Logout} className='listicons' alt="" />
                    <p className='liListName'>Logout</p>
                </li>
            </ul>
        </div>
        <div className='leftbarlastdiv'>
            <img src={Challenges} className='lastimg' alt="" />
            <p className='popcorn'>Popcorn Addict</p>
            <p className='v-time'>5/6hr Viewing time</p>
            <button className='btn-challenges'>Challenges</button>
        </div>
        

    </div>
  )
}

export default Leftbar