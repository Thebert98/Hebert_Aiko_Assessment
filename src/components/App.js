import '../App.css';

import {HashRouter as Router,Route, Routes} from 'react-router-dom'
import Blog from './Blog'
import Landing from './Landing'
import Navigation from './Navigation';


function App() {
  return (
  
    <Router>
      <div className='App'>
        <header className='App-header'>
        <Navigation />  
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route exact path='/blog/:blogUrl/' element={<Blog />} />
      </Routes>
    </Router>

  );
}


export default App;
