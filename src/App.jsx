import { useState } from 'react'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FooterComponent from './Component/FooterComponent'
import './App.css'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
      {/* //http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
      {/* //http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      {/* //http://localhost:3000/add-Employee */}
      <Route path='/add-Employee' element={<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
     </BrowserRouter>
      
    
      
    </>
  )
}

export default App
