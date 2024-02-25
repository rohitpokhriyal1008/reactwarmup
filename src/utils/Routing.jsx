import Home from '../Components/Home'
import User from '../Components/User'
import Userdetail from '../Components/Userdetail'
import About from '../Components/About'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <>
        <Routes>
        
              <Route path='/' element={<Home/>}/>
              <Route path='/User' element={<User/>}> 

              <Route path='/User/:name' element={<Userdetail/>}/>
                 
              </Route>

              <Route path='/About' element={<About/>}/>

        </Routes>
    </>
  )
}

export default Routing