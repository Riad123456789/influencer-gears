import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Popular from "./Components/Popular"
import Sponser from "./Components/Sponser"

function App() {


  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <Navbar></Navbar>
      <Banner></Banner>
      <Sponser></Sponser>
      <Popular></Popular>
    </div>
  )
}

export default App
