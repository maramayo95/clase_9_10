import Counter from "../Counter/Counter";


const Card = ({producto}) => {

  console.log(producto)
  return (
    <div className="card text-bg-dark" style={{ width: "18rem" }}>
      <img src={producto.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">
             $ {producto.price}
        </p>
        <Counter/>
        <div className="d-flex justify-content-center">
        <a href="#" className="btn btn-danger">
          Go somewhere
        </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
