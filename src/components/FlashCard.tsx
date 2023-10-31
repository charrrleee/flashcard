import { Link } from "react-router-dom";
import Card from "../types/Card";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { set } from "../redux/slice/flashcardSlice";

interface FlashCardProps {
  card: Card;
}

const FlashCard: React.FC<FlashCardProps> = (props: FlashCardProps) => {
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    dispatch(set(props.card));
  };

  return (
    <div className="d-inline-flex flex-column bg-light p-1">
      <h2 className="m-1 p-1">{props.card.name}</h2>
      <span className="m-1 p-1">{props.card.name}</span>
      <Link className="m-1 p-1" to={`/flashcard/${props.card.id}`}>
        <Button onClick={handleOnSubmit}>View Cards →</Button>
      </Link>
    </div>
  );
};

export default FlashCard;
