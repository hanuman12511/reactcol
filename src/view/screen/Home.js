import {product} from '../data/data'

import {useNavigate} from 'react-router-dom'

function Home(){
    let navigate = useNavigate()
function addtocart(){
alert('addtocart')
}
function productdetails(d){
//console.log(d);
navigate('/details',{state:d})
}

    return(
        <>
        <div className='main-div-product'>
           {
            product.map(function(d){
            return(
            <div className='product-div'>
                <div className='image'>
                    <img src={d.image} style={{width:'100%',height:'100%'}}/>
                </div>    
                <div className='product'>
                    <div className='product-name'>
                        <p>{d.name}</p>
                    </div>
                    <div className='product-rate'>
                        <p>Rs.{d.sellRate}</p>
                        <p>Rs.<sub><del>{d.MRPRate}</del></sub></p>
                    </div>
                    <div className='product-detail'>
                    <div className='product-detail-addtocart'>
                    <input type='button' value="Add To Cart" onClick={addtocart}/>
                    </div>    
                    
                    <div className='product-detail-show'>
                    
                    <button value={d} onClick={()=>productdetails(d)}>Details </button>
                    </div>    
                </div> 
                </div>  
                
            </div>)
            })
            }
        </div>
        </>
    )
}
export default Home