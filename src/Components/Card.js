
import "../Assets/Styles/Card.css";


const Card = ({ movie }) => {
  return (
    <div className="card">
      <div className="cardContainer" key={movie.id}>
        <div className="back">
          <img className='image' src={movie.image} alt="" />
        </div>
        <h5>{movie.name}</h5>
        <h6>{movie.status}</h6>
        <button className="update">UPDATE</button>
        <div className="timer">
          <h6>1 hour ago</h6>
        </div>
      </div>


    </div>
  )
};

export default Card;






