import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Who from './components/Whoarewe'
import Home from './components/Home'
import Explore from './components/Explore'

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>  
        <Route path='/About' element={<About/>}></Route>  
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Who' element={<Who/>}></Route>
        <Route path='/Explore' element={<Explore/>}></Route>
      </Routes>    
    </Router>
  )
}

export default App


