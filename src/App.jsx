
import './App.css'
import HomePage from './Pages/HomePage'
import Loginpage from './Pages/Loginpage'

function App() {
  const isUserLoggedin=true

  return(
    <div>
      {
        isUserLoggedin ?
        <HomePage/>:
        <Loginpage/>
      }
  
      
      
    </div>
  )
}
export default App
