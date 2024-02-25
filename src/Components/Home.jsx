import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'


const Home = () => {

  const [products] = useContext(ProductContext);  
  const {search} = useLocation();

  const category = decodeURIComponent(search.split("=")[1])
  console.log(category)

  const [filteredProduct, setfilteredProduct] = useState()

  const getProductsCategory = async () => {

    try {
         const {data} = await axios.get(`/products/category/${category}`) 
          setfilteredProduct(data);
    }
     catch (error) {
       console.log(error)
    }
  }


  useEffect(() => {

           if(!filteredProduct) setfilteredProduct(products);
           if(category != "undefined") getProductsCategory();
  },[])


  return  products ? (  
   <>
    <Nav/>
    <div className='right-page h-full w-[80%] bg-[#FFFFFF] flex flex-wrap justify-center items-center gap-3 pt-5 pl-8 overflow-x-hidden overflow-y-auto'> 

           
   {filteredProduct && filteredProduct.map((item,index) => 

    <Link key={index} to={`/details/${item.id}`} className='card p-3 w-56 h-80 border shadow rounded flex flex-col justify-center items-center overflow-hidden'>
    <div className=' image-container w-full h-[15vw] mt-4'>
     <img className=' hover:scale-110 image w-full h-full object-contain bg-center' src={item.image} alt="" />
     </div>
     <p className='my-3 hover:text-blue-400'>{item.title}</p>
</Link>
   )}
        
        
    </div>
   </>
  ) : (
    <Loading/>
  )
}

export default Home