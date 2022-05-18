import "./intro.css"
import Me from "../../img/Intro-pic.jpg"
import {Link} from 'react-router-dom'

const Intro = () => {
  return (
    <div className='intro'>
      <h3 className='nav-title'><Link to='/'>AW</Link></h3>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-i'>Hello, My name is</h2>
          <h1 className='intro-name'>Alex West</h1>
          <h3 className='intro-job'>Frontend Developer</h3>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='intro-bg'>
        </div>
        <div className='intro-img-div'>
        <img src={Me} alt='main picture' className='intro-img'/>
        </div>
      </div>
    </div>
  );
}

export default Intro
