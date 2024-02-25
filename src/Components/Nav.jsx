import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
  
  const [products] = useContext(ProductContext)

  let distinctCategory = products && products.reduce((acc,cval) => [...acc, cval.category],[]);
      distinctCategory = [...new Set(distinctCategory)]
      //console.log(distinctCategory);

      const color = () => {
        return `rgba(${(Math.random()* 255).toFixed()},
        ${(Math.random()* 255).toFixed()},
        ${(Math.random() * 255).toFixed()},0.9)`
      }
      
  return (
    <nav className='side-page w-[20%] h-full bg-[#E6EBEE] flex flex-col items-center pt-8'>

    <a className=' px-4 py-2 text-[#F7F7F7] bg-[#00CFD0] rounded-lg' href="/create">Add New Product</a>

    <hr className='my-3 w-[90%] h-[.2vw] bg-white'/>

    <h1 className=' w-[80%]  px-2 py-2 font-bold text-3xl text-[#233048]'>Category </h1>

    <div className='w-[72%] m-2'>
      
       {distinctCategory.map((item,index) => 
               
               <Link key={index} to ={`?/category=${item}`} className='text-2xl flex items-center gap-3'>

               <span style={{backgroundColor : color()}} className=" w-[.8vw] h-[1.4vh] rounded-full"></span>
              {item}
               </Link>
       )}

     

    </div>
    
  </nav>

  )
}

export default Nav 