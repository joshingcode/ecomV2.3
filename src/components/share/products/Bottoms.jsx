import React,{useState,useEffect} from 'react';
import axios from 'axios';
const port= process.env.PORT || 3000
function Bottoms() {
const [bottoms,setBottoms]=useState([])
useEffect(()=>{
    axios.get('https://cvz4fvb0mk.execute-api.us-east-1.amazonaws.com/dev/products/bottoms')
    .then(res=>setBottoms(res.data))
});

  return (
    <>
    <figure  className="features">
    {bottoms.map(x => <article key={x.id}>
            <a href="#" className='image'><img src={x.img} alt='product-pic'/></a>
            <h3 className='major'>{x.title}-{x.price}</h3>
            <p>{x.description}</p>
            <a href="#" className='special'>Buy Now</a>
        </article>)}
    </figure>
    </>
  )
}

export default Bottoms