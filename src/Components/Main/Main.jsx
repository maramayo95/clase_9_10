import { bannerInfo } from '../../mock/banner'
import Carrousel from '../Carrousel/Carrousel'
const Main = () => {

  return (
    <main>
        <Carrousel imgUno={bannerInfo[0]} imgDos={bannerInfo[1]} imgTres={bannerInfo[2]} />
    </main>
  )
}

export default Main