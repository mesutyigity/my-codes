import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ lang, btn, img }) => {
  return (
    <div>
      <h1>{lang}</h1>
      <img src={img} alt="image" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
