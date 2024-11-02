import './App.css'
import { Outlet } from 'react-router-dom'
import  Navigation from './components/navigation/navigation.jsx'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
