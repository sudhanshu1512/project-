import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


function App() {
  const [count, setCount] = useState(0)

const [playState, setPlayState] = useState(false);

  return (
    <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle='Our Program' title='What We Offer' />
          <Programs />
          <About setPlayState={setPlayState}/>
          <Title subTitle='Gallery' title='Campus Photos' />
          <Campus />
          <Title subTitle='TESTIMONIALS' title='What Student Says' />
          <Testimonials />
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
     </div>
 
  )
}
export default App
