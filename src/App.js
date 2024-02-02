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
import AlertState from './Context/alert/AlertState';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  

  return (
    <>
      <NoteState><AlertState>

        {/* Router */}

        <Router>
          <Navbar />
          
          <Alert message="Done!!"/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
          <Footer/>
        </Router>
        </AlertState>
      </NoteState>

    </>
  );
}

export default App;
