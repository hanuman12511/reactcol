import {jewellery} from '../data/data'
import {useNavigate} from 'react-router-dom'
import ReactStars from 'react-stars'
import React,{useState} from 'react'
function Home(){
    const[mrprate,setMrprate] = useState('')
    const[rate,setrate] = useState('')
    let navigate = useNavigate()
function addtocart(){
alert('addtocart')
}
function productdetails(d){
//console.log(d);
navigate('/details',{state:d})
}

console.log(jewellery);
jewellery.map((d,index)=>{
    d.rate.map(dd=>{
        console.log(dd);
    })
})

    return(
        <>
        <div className='main-div-product'>
           {
            jewellery.map(function(d){
            return(
            <div className='product-div' onClick={()=>productdetails(d)}>
                <div className='image'>
                    <img src={d.image} style={{width:'100%',height:'100%'}}/>
                </div>    
                <div className='product'>
                    <div className='product-rate'>
                    {
                        d.rate.map((d,index)=>{
                           return(
                            <>
                            {index===1&&<p><span><sup>Rs.</sup></span><snap style={{fontSize:20}}>{d}</snap><sup>00</sup></p>}
                             {index===2&&<p style={{fontSize:15,color: 'rgb(209, 209, 210)'}}><del>Rs.{d}</del></p>}
                            </>
                           )
                        })
                    }  
                    </div>
                    <div className='product-name'>
                        <p style={{ }}>{d.name}</p>
                    </div>
                    <div className='rating'>
                    <ReactStars
                    count={5}
                    size={15}
                    color2={'#ffd700'} 
                    value={3}
                    />
                    <p>1200</p>
                    </div>
                    {/* <div className='product-detail'>
                    <div className='product-detail-addtocart'>
                    <input type='button' value="Add To Cart" onClick={addtocart}/>
                    </div>    
                    
                    <div className='product-detail-show'>
                     
                    <button value={d} onClick={()=>productdetails(d)}>Details </button>
                     </div>    
            </div> */}
                </div>  
                
            </div>)
            })
            } 
        </div>
        </>
    )
}
export default Home