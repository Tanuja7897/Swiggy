import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import ResMenu from './component/resMenu'
import { Route , Routes } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  

  return (
    <>
    <Routes>
        <Route path='/' element = {<Header/>}>
            <Route path='/' element = {<Body/>}></Route>
            {/* for every res there should be an unique id so the id will be variable for each res card */}
            <Route path='/resMenu/:id' element = {<ResMenu/>}></Route>
        </Route>
    </Routes>
    </>
  )
}

export default App
