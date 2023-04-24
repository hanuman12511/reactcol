import {useState,useEffect,useContext} from 'react'
import Home from './view/screen/Home'
import Details from './view/screen/Details'
import {BrowserRouter as Router,Route,Routes, Link,useNavigate, Form} from 'react-router-dom'
import Addtocart from './view/screen/Addtocat';
import './view/style/style.css'
import {menubar} from './view/data/data'
import axios from 'axios';
import Login from './view/screen/Login';
import Register from './view/screen/Register';
import Form1 from './view/screen/Form'
import UserContent from './view/content'

function App() {

  const[isVisible,setAccount] = useState(false);
  const[isAccountLog,setAccountLogin] = useState(localStorage.getItem('user'));
  const[isLogReg,setLogReg] = useState("login");
  const[isLogRegcolor,setLogRegColor] = useState("white");
  const[username,setUername] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

console.log("****&&&&***&&");

  const navigate = useNavigate();
/* alert(isAccountLog)  */

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
  
let submitregister=async()=>{
console.log(file);
console.log(fileName);

  const formdata= new FormData();
  formdata.append("file",file)
  formdata.append("filename",fileName)
  let data =JSON.stringify( Object.fromEntries(formdata));

console.log(data);
  let params={
  username:username,
  email:email,
  password:password,
  image:file
}
console.log(params);
try {
    let res =await axios.post("register",params).catch(err=>alert(err))
    console.log(res.data);
    let {success,message} =res.data
    if(success){
      alert(message)
      setLogReg("login")
    }
    else{
      alert(message)
    }
  } catch (error) {
    console.log("error==",error);
    alert(error)
  }

setEmail("")
setPassword("")
setUername("")
}

let submitlogin=async()=>{
    
    let params={
      email:email,
      password:password
    }
    
    console.log(params);
    try {
      let res =await axios.post("login",params).catch(err=>alert(err))
      console.log(res.data);
      
      let {success,message,data} =res.data
      if(success){
      alert(message)
   console.log(data);
     localStorage.setItem("user",JSON.stringify(data))
     setAccountLogin(localStorage.getItem("user"))
      setAccount(!isVisible)
      navigate("/")
      }
      else{
        alert(message)
       }
       } catch (error) {
      alert(error)
    }
    setEmail("")
    setPassword("")
  }
let logout=async()=>{
	localStorage.clear();
  setAccountLogin(null)
  navigate("/")
}
function upload(e){
  let files = e.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (e) => {
      console.log("*************");
      console.log(e.target.result)
      setFile(e.target.result)   
  }
 
 setFileName(e.target.files[0].name)
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
   {isAccountLog&&<><img src={JSON.parse(isAccountLog).image}  className='accountlogo' onClick={()=>alert("notify")} />
  
  <p>{isAccountLog!==null?JSON.parse(isAccountLog).username:"user"}</p> 
 
 </>}
  <img src={require('./view/img/icon/notify.png')}  className='accountlogo' onClick={()=>alert("notify")} />
  <img src={require('./view/img/icon/cart.png')}  className='accountlogo' onClick={showtocart} />
    {isAccountLog===null?
      <img src={require('./view/img/icon/account.png')}  className='accountlogo' onClick={isAccount} />
    : <img src={require('./view/img/icon/logout.png')}  className='accountlogo' onClick={logout} />
    }
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
      <input placeholder='Enter UserName & Email..' type='text' value={email} onChange={d=>setEmail(d.target.value)}/>
       <input placeholder='Enter Password..' type='password' value={password} onChange={d=>setPassword(d.target.value)}/>
       <input type='button' onClick={submitlogin} value="Login" className='regbutton' style={{backgroundColor:' aqua',width:'50%',marginTop:50}}/>
      
      </div> :
       <div className='register-form'>
        <h2>User Register Form </h2>
        <hr/>
       <input placeholder='Enter UserName..' type='text' value={username} onChange={d=>setUername(d.target.value)}/>
       <input placeholder='Enter Email..' type='email' value={email} onChange={d=>setEmail(d.target.value)}/>
       <input placeholder='Enter Password..' type='password' value={password} onChange={d=>setPassword(d.target.value)}/>
       <input type='file' onChange={upload}/>
       <input type='button' value="Register" onClick={submitregister} className='regbutton' style={{backgroundColor:' aqua',width:'50%',marginTop:50}}/>
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
  <Route path="/form" element={<Form1 />} />
</Routes>
    
</>
  );
}

export default App;
