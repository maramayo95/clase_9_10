import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner'
import SkeletonContainer from './SkeletonContainer'
const GridCardContainer = ({title}) => {
  const {loading,productos} = useFetch()

  return (
    <section className="d-flex flex-column justify-content-center align-items-center flex-wrap my-5">
        <h1 className="text-center">Todos los productos</h1>
        {
            loading ? <SkeletonContainer/> : 
            <section className="grilla my-5">
            {productos.map(producto => (
                <Card key={producto.id} producto={producto}/>
            ))}
            </section>
        }

    </section>
  )
}

export default GridCardContainer