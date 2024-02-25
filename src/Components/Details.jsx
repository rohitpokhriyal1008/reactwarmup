import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/Axios';
import Loading from './Loading';

const Details = () => {
   const [product, setproduct] = useState()

   
   const {id} = useParams();

const getSingleProduct = async () => {
    try {
        const {data} = await axios.get(`/products/${id}`);
       setproduct(data);

        
      } 
      catch (error) {
        console.log(error)
      }
}

  useEffect(() => {
        getSingleProduct();
  },[])

  // Check if product is available before destructuring its properties
  if (!product) {
    return <Loading />;
 }

 // Destructure properties after ensuring product is available
 const { image, title, price, category, description } = product;
         

  return  product ? (
    <>
    <div className=' w-[70%] h-full  m-auto  '>
    <div className='image-container  mt-[20%] flex justify-center items-center  gap-10'>
    <div className='w-[28%] h-[50%]' >
        
        <img className='h-full w-full object-cover' src={image} alt="" />
       </div>

       <div className=' content w-[40%] mt-[5%]  p-1'>
           <h1 className='text-4xl'>{title}</h1>
           <h3 className='text-md font-semibold opacity-[50%] my-[3%]'>{category}</h3>
           <h2 className='text-green-800'>${price}</h2>
           <p className='my-3 mb-4'>{description}</p>
           <Link className='p-2 bg-blue-200 rounded-md text-white mr-4 '>EDIT</Link> 
           <Link className='p-2 bg-red-200 rounded-md text-white'>DELETE</Link>

       </div>
    </div>
    </div>
    </>
  ) : <Loading/>
   
  
}

export default Details