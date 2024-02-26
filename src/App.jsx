import React from 'react'
import Home from './Components/Home'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Details from './Components/Details'

const App = () => {

  const {search,pathname} = useLocation();
   

  return ( 
    <>
      {(pathname != "/" || search.length > 0)   &&
         <Link to ="/" className='px-4 py-1 bg-blue-500 shadow rounded items-center text-white absolute left-[22%] top-[5%'> Home</Link>
      }
        
      <div className='w-screen h-screen flex'>
          
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/details/:id" element = {<Details/>} />
       </Routes>
      </div> 

    </>
  )
}

export default App