import {useState} from 'react'
import Home from './view/screen/Home'
import Details from './view/screen/Details'
import {BrowserRouter as Router,Route,Routes, Link,useNavigate} from 'react-router-dom'
import Addtocart from './view/screen/Addtocat';
import './view/style/style.css'
import {menubar} from './view/data/data'
import axios from 'axios';
function App() {
  const[isVisible,setAccount] = useState(false);
  const navigate = useNavigate();

  let isAccount=()=>{
    //alert("account")
    setAccount(!isVisible)
  }
let isRegister=()=>{
    alert("register")
    setAccount(!isVisible)
  }
  let isLogin=()=>{
    alert("login")
    setAccount(!isVisible)
  }


  let showtocart=async()=>{

navigate("/addtocart")
  }

  return (
<>

<div className='menubar'>
  <div className='menu-div'>
      <ul>
    <Link to="/" className='Link'><li>Home</li></Link>
    {
      menubar.map(d=>(
      <Link to={`/${d}`} className='Link'><li>{d}</li></Link>
    ))
    }
  </ul>
  </div>
  <div className='logo-div'>
  <img src={require('./view/img/icon/notify.png')}  className='accountlogo' onClick={()=>alert("notify")} />
  
  <img src={require('./view/img/icon/cart.png')}  className='accountlogo' onClick={showtocart} />
  
    <img src={require('./view/img/icon/account.png')}  className='accountlogo' onClick={isAccount} />
  
   { isVisible&& <div className='accountdrop'>
    <ul>
       <li onClick={isRegister}>Register</li>
        <li onClick={isLogin}>Login</li>
    </ul>
    </div>
    }
  </div>
</div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/details" element={<Details />} />
  <Route path="/addtocart" element={<Addtocart />} />
</Routes>
    
</>
  );
}

export default App;
