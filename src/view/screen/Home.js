import {jewellery,banner} from '../data/data'
import {useNavigate} from 'react-router-dom'
import ReactStars from 'react-stars'
import React,{useState,useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import axios from 'axios'
function Home(){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
 useEffect(()=>{
  let data = async()=>{
  let res =  await axios.get('getdata')
  console.log(res.data);
  let pdata=[{"id":1,"name":"hanu"}]
  let res1 =  await axios.post('postdata',pdata)
  console.log(res1.data);
  }
data()
},[]) 
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


return(
      <>
      <div>
        <AwesomeSlider className='slider'  bullets={true} play={true}
           cancelOnInteraction={false}
            interval={100} >
        {
        banner.map(function(d){
        return(
          <div data-src={d}  className='slider' />
          )
        })
      }
      </AwesomeSlider>
    </div>

      
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
                      <ReactStars count={5} size={15} color2={'#ffd700'} value={3}/>
                      <p>1200</p>
                    </div>
                   </div>  
                </div>
                )
            })
        } 
      </div>
      <div className='mslider'>
        <Carousel responsive={responsive}
        autoPlaySpeed={500}
        infinite={true}
        transitionDuration={500}
          autoPlay={true}
        >
          { jewellery.map(function(d){
              return(
                  <div>
                    <div>
                      <img src={d.image} style={{width:'100PX',height:'100PX'}}/>
                    </div> 
                  </div>
                  )
                 })
          }
            <div>
              <div>
                <h1>get more</h1>
              </div> 
            </div>
      </Carousel>

      </div>
      <div className='footer'></div>
      <div className='copy-right'>
        <h3>All Copy Right@.com</h3>
      </div>
    </>
    )
}
export default Home