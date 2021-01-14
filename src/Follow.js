import './Follow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Follow() {
  return (
    <div className="Follow">
        <p className="Follow-content"> 
          Follow us for more information
        </p>
        <a
          className="Bunus-instagram"
          href="https://www.instagram.com/bunuscoffee/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faInstagram} />
         <span>@bunuscoffee</span>
        </a>
        <p className="Copyright">
            ©2020 Bunús Coffee
        </p>
    </div>
  );
}

export default Follow;
