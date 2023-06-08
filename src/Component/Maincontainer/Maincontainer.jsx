import React from 'react'
import './Maincontainer.css'
import Navbar from '../Navbar/Navbar'
import coverimg from '../../images/The-Flash-Movie-Trailer-scaled.jpg'
import johnwick from '../../images/peakpx (5).jpg'
import supermario from '../../images/peakpx.jpg'
import BlackAdams from '../../images/dominic-toretto-in-fast-x-5k-hc.jpg'
import transformers from '../../images/Rise-of-the-Beasts-poster-1.jpg'
import dungons from '../../images/peakpx (8).jpg'
import movie1 from '../../images/peakpx (6).jpg'  
import movie2 from '../../images/peakpx (1).jpg'  
import movie3 from '../../images/peakpx (4).jpg'
import movie4 from '../../images/hidden-strike-movie-7m.jpg'
import movie5 from '../../images/wallpapersden.com_black-adam-4k-movie-poster-2022_3840x2160.jpg'



const Maincontainer = () => {
  return (
    <div className='mainContainer'>
        <Navbar/>
        <div>
          <img src={coverimg} alt="" className='coverimg' />
          <div className='itemsContainer'>
               <p className='title'>The Flash Movie</p>
              <p className='subtitle'>98% Match</p>
              <div className='items'>
                <a href="https://www.youtube.com/watch?v=r51cYVZWKdY" target='blank'>
                <button className='btn-coverimg'>Watch Now</button>
                </a>
              <div className='watchlater'>
                <p className='plus'>+</p>
              </div>
          </div>
          </div>
        </div>
      <div>
        <h4 className='submaintitle'>Continue Watching</h4>
        <div style={{display:'flex', marginLeft:'60px', flexWrap:'wrap'}}>

        <div className='itemContainer'>
          <img src={johnwick} alt=""  className='itemimg'/>
          {/* <p className='itemName'>JohnWick Chapter 4</p> */}
          <a href="https://www.sabishare.com/file/oISCXcYmD47-john-wick-chapter-4-2023-netnaija-com-mkv" target='blank'>
          <button className='btn-itemContainer'>Download Now</button>
          </a>
        </div>
        
        <div className='itemContainer'>
          <img src={supermario} alt=""  className='itemimg'/>
          {/* <p className='itemName'>SuperMario Movie</p> */}
          <a href="https://www.sabishare.com/file/EYoZtckpB51-the-super-mario-bros-movie-20233-netnaija-com-mkv" target='blank'>
          <button className='btn-itemContainer'>Download Now</button>

          </a>
        </div>

        <div className='itemContainer'>
          <img src={BlackAdams} alt=""  className='itemimg'/>
          {/* <p className='itemName'>Fast & Furious X</p> */}
          <a href="https://www.youtube.com/watch?v=eoOaKN4qCKw" target='blank'>
          <button className='btn-itemContainer'>Watch Trailer</button>

          </a>
        </div>

        <div className='itemContainer'>
          <img src={transformers} alt=""  className='itemimg'/>
          {/* <p className='itemName'>Transformers ROTB</p> */}
          <a href="https://www.youtube.com/watch?v=itnqEauWQZM" target='blank'>
          <button className='btn-itemContainer'>Watch Trailer</button>

          </a>
        </div>

        <div className='itemContainer'>
          <img src={dungons} alt=""  className='itemimg'/>
          {/* <p className='itemName'>Dungeons & Dragons</p> */}
          <a href="https://www.sabishare.com/file/yMqWVkBxK26-dungeons-and-dragons-honor-among-thieves-2023-netnaija-com-mkv" target='blank'>
          <button className='btn-itemContainer'>Download Now</button>

          </a>
        </div>
        </div>

      </div>
      <div>
        <h4 className='submaintitle'> Recommend Movies</h4>
        <div style={{display:'flex', marginLeft:'60px', flexWrap:'wrap'}}>

        <div className='itemContainer'>
          <img src={movie1} alt=""  className='itemimg'/>
          {/* <p className='itemName'>JohnWick Chapter 4</p> */}
          <a href="https://www.youtube.com/watch?v=avz06PDqDbM" target='blank'>

          <button className='btn-itemContainer'>Watch Trailer</button>
          </a>
        </div>
        
        <div className='itemContainer'>
          <img src={movie2} alt=""  className='itemimg'/>
          {/* <p className='itemName'>SuperMario Movie</p> */}
          <a href="https://www.youtube.com/watch?v=kpGo2_d3oYE" target='blank'>

          <button className='btn-itemContainer'>Watch Trailer</button>
          </a>
        </div>

        <div className='itemContainer'>
          <img src={movie3} alt=""  className='itemimg'/>
          {/* <p className='itemName'>Fast & Furious X</p> */}
          <a href="https://www.youtube.com/watch?v=yjRHZEUamCc" target='blank'>
          <button className='btn-itemContainer'>Watch Trailer</button>

          </a>
        </div>

        <div className='itemContainer'>
          <img src={movie4} alt=""  className='itemimg'/>
          {/* <p className='itemName'>Transformers ROTB</p> */}
          <a href="https://www.youtube.com/watch?v=mR3ExaGGFio" target="blank">

          <button className='btn-itemContainer'>Watch Trailer</button>
          </a>
        </div>

        <div className='itemContainer'>
          <img src={movie5} alt=""  className='itemimg'/>
          {/* <p className='itemName'>Dungeons & Dragons</p> */}
          <a href="https://www.sabishare.com/file/DZpgLliHW92-black-adam-2022-netnaija-com-mkv" target='blank'>
          <button className='btn-itemContainer'>Download</button>

          </a>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Maincontainer