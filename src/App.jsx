import Banner from "./Components/Banner"
import Foother from "./Components/Foother"
import Navbar from "./Components/Navbar"
import Popular from "./Components/Popular"
import Sponser from "./Components/Sponser"
import Featuresection from "./Featuresection"

function App() {


  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 ">
        <Navbar></Navbar>
        <Banner></Banner>
        <Sponser></Sponser>
        <Popular></Popular>
        <Featuresection></Featuresection>

      </div>
      <Foother></Foother>
    </div>
  )
}

export default App
