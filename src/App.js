import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './styles/main.css'
import Home from './pages/home';
import Weather from './pages/weather'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/weather' element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
