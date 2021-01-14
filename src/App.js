import Helmet from "react-helmet";
import logo from './logo.svg';
import './App.css';
import {useSpring, animated} from 'react-spring';
import backgroundVideo from './plants.mp4';
import backgroundVideoThumb from './plants.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa';


function App() {
  const props = useSpring({
      opacity: 1, 
      from: {opacity: 0}, 
      config: {delay: 0, duration: 1500},
      });
  return (
    <div className="App">
      <Helmet>
         {/* <!-- HTML Meta Tags --> */}
        <title>Bunús Coffee, Dublin</title>
        <meta name="description" content="Proper Coffee, Treats & more coming to Dublin's Northside in early 2021." />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Bunús Coffee, Dublin" />
        <meta itemprop="description" content="Proper Coffee, Treats & more coming to Dublin's Northside in early 2021." />
        <meta itemprop="image" content="https://bunus.netlify.app/static/media/logo.fcd4cf9c.svg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="http://bunus.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bunús Coffee, Dublin" />
        <meta property="og:description" content="Proper Coffee, Treats & more coming to Dublin's Northside in early 2021." />
        <meta property="og:image" content="https://bunus.netlify.app/static/media/logo.fcd4cf9c.svg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bunús Coffee, Dublin" />
        <meta name="twitter:description" content="Proper Coffee, Treats & more coming to Dublin's Northside in early 2021. " />
        <meta name="twitter:image" content="https://bunus.netlify.app/static/media/logo.fcd4cf9c.svg" />
      </Helmet>
      <main className="App-header">
      <video playsInline autoPlay muted loop poster={backgroundVideoThumb} id="bgvid">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
        <animated.div style={props}><img src={logo} className="App-logo" alt="logo" /></animated.div>
        <p>
          Proper Coffee, delicious treats and more.. 
        </p>
        <span className="Coming"> 
          <em><FaMapMarkerAlt />  Dublin's Northside</em><br />Exact location TBA <em>/</em> Opening early 2021.
        </span>
      </main>
    </div>
  );
}

export default App;
