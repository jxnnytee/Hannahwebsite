import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleSidebar from './Sidebar';
import Navbar from './Navbar';
import Hero from './Hero';
import Carousel from './Carousel';
import Booking from './Booking';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import Success from './Success';
import Thankyou from './Thankyou';
import About from './About';

function App() {
  return (
    <Router>
      <Navbar />
      <SimpleSidebar children={undefined} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route 
          path="/booking" 
          element={
            <>
              <Booking />
              <About />
            </>
          } 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Carousel />
      <Footer />
    </Router>
  );
}

export default App;