import {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const onAdd = () => {
        setCount(count + 1)
    }

    const onSustract = () => {
        if(count > 0){
            setCount(count -1)
        }
    }
    

    return (
    <div className="d-flex flex-column  align-items-center gap-3 my-5">
            <div>
                <h3 className='text-center'>{count}</h3>
            </div>
            <div className="dflex flex-row justify-content-around">
                    <button className="btn btn-warning mx-1" onClick={onAdd}>+</button>
                    <button className="btn btn-danger mx-1" onClick={onSustract}>-</button>
            </div>
    </div>
  )
}

export default Counter