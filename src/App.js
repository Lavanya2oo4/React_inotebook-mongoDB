import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>


        {/* Router */}

        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>

    </>
  );
}

export default App;
