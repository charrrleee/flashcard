import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "../types/Card";
import { Button } from "react-bootstrap";
import { Card as CardComp, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import "../css/FlashcardPage.css";

const FlashcardPage: React.FC = () => {
  const flashCard: Card = useSelector((state: RootState) => state.cardReducer);
  const [flipped, setFlipped] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleOnClickPrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleOnClickNext = () => {
    if (current < 9) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="flashcard">
      <h2>{flashCard.name}</h2>
      <div
        className={`card ${flipped ? "flip" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="front">{flashCard.qAndA[current].question}</div>
        <div className="back">{flashCard.qAndA[current].answer}</div>
      </div>
      <div className="d-flex justify-content-around m-4">
        <Button onClick={handleOnClickPrevious} className="mx-3">
          Previous
        </Button>
        <Button onClick={handleOnClickNext} className="mx-3">
          Next
        </Button>
      </div>
    </div>
  );
};

export default FlashcardPage;
