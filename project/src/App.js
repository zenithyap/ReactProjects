import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About';
import Home from './Home';
import NavigationBar from './NavigationBar';
import './bg.css'

function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
