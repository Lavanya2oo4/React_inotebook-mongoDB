import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
        </Routes>
      </Router>


    </>
  );
}

export default App;
