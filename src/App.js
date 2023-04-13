import Home from './view/screen/Home'
import Details from './view/screen/Details'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Addtocart from './view/screen/Addtocat';
import './view/style/style.css'
function App() {
  return (
<>
<Router>
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
