import '../style/form.css'
import {useState} from 'react'
export default function Form(){
//const[data,setData] =useState({name:'',email:'',password:''})
const[name,setName] =useState('')
const[email,setEmail] =useState('')
const[password,setPassword] =useState('')
    function register(){

       console.log(name);
       console.log(email);
       console.log(password);
    }
    return(
        <>
        <h1>Forms</h1>
        <table className='table'>
        <tr><td>Name:</td><td><input placeholder="enter name" className="name" value={name}onChange={(name)=>setName(name.target.value)}/></td></tr>
        <tr><td>Email:</td><td><input placeholder="enter Email" className="name" value={email}onChange={(name)=>setEmail(name.target.value)}/></td></tr>
        <tr><td>password:</td><td><input placeholder="enter password" className="name" value={password}onChange={(name)=>setPassword(name.target.value)}/></td></tr>
        <tr><td></td><td><input type='button' value="Register" className="name" onClick={register}/></td></tr>

        </table>
        </>
    )
}