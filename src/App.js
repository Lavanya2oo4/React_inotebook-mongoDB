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
import NoteState from './Context/notes/NoteState';

function App() {
  return (
    <>

      <NoteState>

        {/* Router */}

        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
