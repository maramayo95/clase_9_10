import {useState,useEffect} from 'react'

const useFetch = () => {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=adidas";
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
                setData(res.results)
        })
        .catch((err) => console.log(err))
        .finally( ()=> { 
            setTimeout(()=>{
                setLoading(false)
            },500)
        })
    }, []);
      let productos = data;
   
  
  return {
    productos, loading
  }
}

export default useFetch