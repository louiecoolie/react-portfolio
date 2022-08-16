import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-l.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

let name = "uis"
let blurb = "curious learner and roblox developer"

const Home = () => {
  //creating animated letter state
  const [letterClass, setLetterClass] = useState('text-animate')
  //creating letter arrays to be used for aniamted letters
  const nameArray = name.split("")
  const blurbArray = blurb.split("")
  console.log(blurbArray)
  useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 7000);
		return () => clearTimeout(timer);
	}, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1> 
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}> I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img 
            src={LogoTitle} 
            alt="developer" 
          />
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={nameArray}
            idx={15} 
          />
          <br />
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={blurbArray}
            idx={22} 
          />
        </h1>
        <h2>Roblox Developer / Twitch</h2>
        <Link to="/contact" className='flat-button'>
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}

export default Home