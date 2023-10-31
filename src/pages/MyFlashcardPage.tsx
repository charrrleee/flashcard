import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FlashCard from "../components/FlashCard";
import Card from "../types/Card";

const MyFlashcardPage: React.FC = () => {
  const flashCards: Card[] = useSelector((state: RootState) => {
    return state.cardsReducer.cards;
  });
  const cards: Card[] = flashCards ?? [];

  return (
    <div>
      <h2>Flashcards</h2>
      <div className="row justify-content-between">
        {cards.map((card: Card, idx: number) => (
          <div key={idx} className="col-md-4 mb-4">
            <FlashCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFlashcardPage;
