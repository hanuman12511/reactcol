import {useState} from 'react'
import {useLocation} from 'react-router-dom'
function Details(){
    let location = useLocation();
    const[product,setProduct] = useState(location.state)
    console.log(product);
    function productaddtocart(){
alert("addtocart")
    }
    function productbuynow(){
alert('buy now')
    }
    return(
        <>
        <h3>{product.name}</h3>
        <div className='details'>
            <div className='details-image'>
                <div className='details-image-inner'>
                    <img src={product.image} style={{width:'100%',height:'100%'}}/>
                </div>

            </div>
            <div className='details-info'>
                    <div className='details-info-ratings'>
                            <p>1,441 ratings</p>
                    </div>
                    
                    <div className='details-info-rate'>
                        <p>Rs.{product.sellRate}/-</p>
                        <p>Inclusive of all taxes EMI starts at ₹2,962. No Cost EMI available EMI o</p>
                    </div>
                    
                    <div className='details-info-offer'>
                            <p>Offers</p>
                    </div>
                    
                    <div className='details-info-color'>
                            <p>Colour:{product.color}</p>
                    </div>
                    
                    <div className='details-button'>
                           
                    <button value={product} onClick={()=>productaddtocart(product)}>Add To Cart </button> 
                    <button value={product} onClick={()=>productbuynow(product)}>Buy Now </button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Details