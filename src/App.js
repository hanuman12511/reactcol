import {useState} from 'react'
import Home from './view/screen/Home'
import Details from './view/screen/Details'
import {BrowserRouter as Router,Route,Routes, Link,useNavigate} from 'react-router-dom'
import Addtocart from './view/screen/Addtocat';
import './view/style/style.css'
import {menubar} from './view/data/data'
import axios from 'axios';
import Login from './view/screen/Login';
import Register from './view/screen/Register';
function App() {
  const[isVisible,setAccount] = useState(false);
  const[isLogReg,setLogReg] = useState("login");
  const[isLogRegcolor,setLogRegColor] = useState("white");
  const navigate = useNavigate();

  let isAccount=()=>{
    //alert("account")
    setAccount(!isVisible)
  }
let isRegister=()=>{
   
  
   setLogReg("register")
  }
  let isLogin=()=>{
 
 
  setLogReg("login")
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
  
   { isVisible&& <div className='accountdrop' >
    <div className='close' onClick={()=>setAccount(!isAccount)}></div>
    <div className='accountshow-div'>
      <div className='div1'>
      <p className='register' style={{backgroundColor:isLogReg ==="login"?isLogRegcolor:""}} onClick={isLogin}>Login</p>
      <p className='register' style={{backgroundColor:isLogReg ==="register"?isLogRegcolor:""}} onClick={isRegister}>Register</p>
      
      </div>
     { isLogReg==="login"?<div className='login-form'>
      <h2>User Login Form </h2>
      <hr/>
      <input placeholder='Enter UserName & Email..' type='text'/>
      
       <input placeholder='Enter Password..' type='password'/>
       <input type='button' value="Login" className='regbutton' style={{backgroundColor:' aqua',width:'50%',marginTop:50}}/>
      
      </div> :
       <div className='register-form'>
        <h2>User Register Form </h2>
        <hr/>
       <input placeholder='Enter UserName..' type='text'/>
       <input placeholder='Enter Email..' type='email'/>
       <input placeholder='Enter Password..' type='password'/>
       <input type='button' value="Register" className='regbutton' style={{backgroundColor:' aqua',width:'50%',marginTop:50}}/>
      </div>
  }  
      
        
        
        
    </div>
    </div>
    }
  </div>
</div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/details" element={<Details />} />
  <Route path="/addtocart" element={<Addtocart />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
    
</>
  );
}

export default App;
