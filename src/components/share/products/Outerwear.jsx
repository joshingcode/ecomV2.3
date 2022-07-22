import React, {useState,useEffect} from 'react';
import axios from 'axios';
const port= process.env.PORT || 3000

function Outerwear() {
    const [outer, setOuter]=useState([])
    useEffect(()=>{
        axios.get(`https://cvz4fvb0mk.execute-api.us-east-1.amazonaws.com/dev/products/outerwear`)
        .then(res=>setOuter(res.data))
    })
  return (
    <>
    <figure className="features">
        {outer.map(x => <article key={x.id}>
            <a className='image'><img src={x.img}/></a>
            <h3 className='major'>{x.title}-{x.price}</h3>
            <p>{x.description}</p>
            <a className='special'>Buy Now</a>
        </article>)}
    </figure>
    </>
  )
}

export default Outerwear