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
      {cards.map((card: Card, idx: number) => {
        return <FlashCard card={card} key={idx} />;
      })}
    </div>
  );
};

export default MyFlashcardPage;
