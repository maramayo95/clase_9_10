import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const Home = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Home