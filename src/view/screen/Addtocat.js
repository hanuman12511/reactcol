import axios from "axios";
import { useState ,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
function Addtocart(){

    const nav = useNavigate()
    const[username,setUsername] = useState(localStorage.getItem('user'))
    let adddelete=()=>{
        alert("delete product")
    }
    let payamount=()=>{
            alert("pay amount")
    }
    const[data,setData] = useState('')
    useEffect(()=>{
        let showData=async()=>{
           let params={"username":username}
        let res =await axios.post("showtocart",params)
           // console.log(res.data); 
            setData(res.data)
        }
        showData();
    },[])
  
    async function download(){
        let url = 'http://localhost:8080/download';
		window.location.href = url;
    }

    return(
       <>
      
       <div className="addtocart-div">
        {username?
       <table>
        <tr><th>	<a href="#" onClick={download}>Download</a></th></tr>
        <tr><th colspan="2">Product Details</th><th>Price</th><th>Quantity</th><th>SubTotal</th><th>Action</th></tr>
       {data!==''?data.map(d=>{
        return(
         <>
                <tr><td><img src={d.image} className="cartimage"/></td><td> <p>{d.name}</p></td><td className="addtd">{d.rate[1]}</td> <td  className="addtd">1</td><td  className="addtd">{d.rate[1]}</td><td className="addtd"><img src={require('../img/icon/delete.png')} className="adddelete" onClick={adddelete}/></td></tr>
    
           
            
            </>
        )
       })
        :null
    }
   
    {/* </table>
    <table> */}
        <tr><th colSpan={2}>SubTotal</th><th colSpan={2}>Rs.1000/-</th><th colSpan={2}><p className="addpayamount" onClick={payamount}> PayAmount</p></th></tr>
    </table>:<div className="cartempty">
        <img src={require('../img/icon/emptycart.png')}/>
        </div>}
    </div>
   
       </>
    )
}
export default Addtocart