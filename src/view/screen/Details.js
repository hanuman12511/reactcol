import axios from 'axios';
import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import ReactStars from 'react-stars'
function Details(){
    let location = useLocation();
    const[product,setProduct] = useState(location.state)
    const[image,setImage] = useState(product.image)
    const[data,setLocalitem] = useState([])
    let productaddtocart=async(product)=>{
             let params={
            "Brand":product.Brand,
            "Color":product.Color,
            "Delivery":product.Delivery,
            "Dimensions":product.Dimensions,
            "Disclaimer":product.Disclaimer,
            "Feature":product.Feature,
            "Jewellery Care":product.Jewellery_Care,
            "Material":product.Material,
            "Offers":product.Offers,
            "Plating":product.Plating,
            "Stones":product.Stones,
            "allImage":product.allImage,
            "id":product.id,
            "image":product.image,
            "name":product.name,
            "rate":product.rate
        }
      let res = await axios.post('addtocart',params)
      console.log(res.data);
      alert("product insert successfully")
    }
    function productbuynow(){
alert('buy now')
    }



    function showimage(d){
        setImage(d)
    }
    return(
        <>
        <h4 style={{marginLeft:20}}>{product.name}</h4>
        <div className='details'>
            <div className='details-image'>
                <div className='details-image-show'>
                 
                    { product.allImage.map(d=>{
                            return(
                                <div onMouseOver={()=>showimage(d)}>
                    <img src={d}/>
                     </div> 
                            )
                        })

                    }
                    
                </div>
                <div className='details-image-inner'>
                    <img src={image} style={{width:'100%',height:'100%'}}/>
                </div>

            </div>
            <div className='details-info'>
                <div>
                 <div className='details-product-info'>
                    <p>Brand:<span style={{color:'  rgb(1, 122, 133)',marginLeft:5}}>{product.Brand}</span></p>
                     <div>
                        <div>
                    <ReactStars
                    count={5}
                    size={15}
                    color2={'#ffd700'} 
                    value={3}
                    /> </div>
                     <div>
                    <p>1,441 ratings</p>
                    </div>
                    </div>
                   
                    </div>
                    
                    <div  className='details-product-info'>
                        <p>Rs.{product.sellRate}/-</p>
                        <p>Inclusive of all taxes EMI starts at ₹2,962. No Cost EMI available EMI o</p>
                    </div>
                    
                    <div  className='details-product-info'>
                            <p>Offers</p>
                    </div>
                    
                    <div  className='details-product-info'>
                            <p>Colour:{product.color}</p>
                    </div>
                    
                </div>
               
                    
                    <div>
                           
                    <button value={product} onClick={()=>productaddtocart(product)}>Add To Cart </button> 
                    <button value={product} onClick={()=>productbuynow(product)}>Buy Now </button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Details