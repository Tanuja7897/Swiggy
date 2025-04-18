import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import { Route , Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Routes>
        <Route path='/' element = {<Header/>}>
            <Route path='/' element = {<Body/>}></Route>
        </Route>
    </Routes>
    </>
  )
}

export default App
