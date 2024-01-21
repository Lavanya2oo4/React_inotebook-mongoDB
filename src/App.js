import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NoteState>

        {/* Router */}

        <Router>
          <Navbar />
          
          <Alert message="Done!!"/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          {/* <Footer/> */}
        </Router>
      </NoteState>

    </>
  );
}

export default App;
