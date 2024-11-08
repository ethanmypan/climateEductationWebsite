import './App.css'
import { Outlet } from 'react-router-dom'
import  Navigation from './components/navigation/navigation.jsx'
import Footer from './components/footer/footer.jsx'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
