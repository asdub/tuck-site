import Helmet from "react-helmet";
import logo from './logo.svg';
import tucklogo from './tuck.svg';
import logotag from './logotag.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  const props = useSpring({
      opacity: 1, 
      from: {opacity: 0}, 
      config: {delay: 0, duration: 500},
      });
  const slow = useSpring({
      opacity: 1, 
      from: {opacity: 0}, 
      config: {delay: 0, duration: 100},
      });
  return (
    <div className="App">
      <Helmet>
         {/* <!-- HTML Meta Tags --> */}
        <title>TUCK</title>
        <meta name="description" content="Speciality Coffee, Ice-Cream & Snack Bar in Howth, Co. Dublin." />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="TUCK" />
        <meta itemprop="description" content="Speciality Coffee, Ice-Cream & Snack Bar in Howth, Co. Dublin." />
        <meta itemprop="image" content="https://tuck.netlify.app/static/media/logo.fcd4cf9c.svg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://tuck.ie" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TUCK" />
        <meta property="og:description" content="Speciality Coffee, Ice-Cream & Snack Bar in Howth, Co. Dublin." />
        <meta property="og:image" content="https://tuck.netlify.app/static/media/logo.fcd4cf9c.svg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TUCK" />
        <meta name="twitter:description" content="Speciality Coffee, Ice-Cream & Snack Bar in Howth, Co. Dublin." />
        <meta name="twitter:image" content="https://tuck.netlify.app/static/media/logo.fcd4cf9c.svg" />
      </Helmet>
      <main className="App-content">
       <animated.div style={props} className="logo-container">
        <img src={tucklogo} className="Tuck-logo" alt="TUCK" />
        <img src={logotag} className="logo-tag" alt="TUCK" />
        </animated.div>
        <div className="App-header">
    
          <animated.div style={slow}><img src={logo} className="App-logo" alt="QR Code - Scan" /></animated.div>
          <p>
           OPEN 8AM - 8PM / MON - SUN
          </p>
        <span className="Coming"> 
          <em><FaMapMarkerAlt />  <a href="https://goo.gl/maps/1DNZHTYE98dihUSN7" target="_blank" rel="noreferrer">Boyd House, Harbour Road, Howth, Co. Dublin</a></em>
        </span>
        </div>
        <animated.div style={slow}>
          <div className="Follow">
              <div className="Follow-inner">
                  <p className="Follow-content"> 
                    Follow us
                  </p>
                  <a
                  className="tuck-instagram"
                  href="https://www.instagram.com/tuck_howth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>@tuck_howth</span>
                  </a>
              </div>
          </div>
        </animated.div>
      </main>
      <p className="Copyright">
        Copyright © 2021 TUCK
      </p> 
    </div>
  );
}

export default App;
