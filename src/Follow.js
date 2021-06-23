import './Follow.css';
import {useSpring, animated} from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Follow() {
    const props = useSpring({
      opacity: 1, 
      from: {opacity: 0}, 
      config: {delay: 0, duration: 100},
      });
  return (
    <animated.div style={props}>
    <div className="Follow">
        <div className="Follow-inner">
            <p className="Follow-content"> 
            Follow us for more information
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
        <p className="Copyright">
            ©2021 TUCK
        </p>
    </div>
    </animated.div>
  );
}

export default Follow;
