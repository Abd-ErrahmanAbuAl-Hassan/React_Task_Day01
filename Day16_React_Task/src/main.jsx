import { createRoot } from 'react-dom/client';
import './styles/index.css';
import {Navbar} from './Components/navbar';
import {Hero} from './Components/hero';
import {Footer} from './Components/footer';
import {Sales} from './Components/Sales';

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Hero/>
    <Sales/>
    <Footer/>
  </>
)
