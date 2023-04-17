import Home from './view/screen/Home'
import Details from './view/screen/Details'
import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import Addtocart from './view/screen/Addtocat';
import './view/style/style.css'
import {menubar} from './view/data/data'
function App() {
  return (
<>
<Router>
  <div className='menubar'>
    <ul>
<Link to="/" className='Link'><li>Home</li></Link>
  {
    menubar.map(d=>(
      <Link to={`/${d}`} className='Link'><li>{d}</li></Link>
    ))
  }
  </ul>
  </div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/details" element={<Details />} />
  <Route path="/addtocart" element={<Addtocart />} />
</Routes>
    </Router>
</>
  );
}

export default App;
