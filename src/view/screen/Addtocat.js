import axios from "axios";
import { useState ,useEffect} from "react";

function Addtocart(){

    let adddelete=()=>{
        alert("delete product")
    }
    let payamount=()=>{
            alert("pay amount")
    }
    const[data,setData] = useState('')
    useEffect(()=>{
        let showData=async()=>{
        let res =await axios.get("showtocart")
           // console.log(res.data); 
            setData(res.data)
        }
        showData();
    },[])
  
    return(
       <>
      
       <div className="addtocart-div">
       <table>
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
    </table>
    </div>
   
       </>
    )
}
export default Addtocart