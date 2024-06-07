import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About';
import Home from './Home'

function App() {
  return (
    <div >
      <Navbar />
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </BrowserRouter>
      <Footer />     
    </div>
  );
}

export default App;
