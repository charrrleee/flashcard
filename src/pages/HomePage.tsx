import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "../types/Card";
import OpenAI from "openai";
import { useEffect, useState } from "react";
import Document from "../types/Document";
import { v4 as uuidv4 } from "uuid";
import { set } from "../redux/slice/flashcardsSlice";
import FlashCard from "../components/FlashCard";
import { unset } from "../redux/slice/flashcardSlice";

const HomePage: React.FC = () => {
  const flashCards: Card[] = useSelector((state: RootState) => {
    return state.cardsReducer.cards;
  });

  const cards: Card[] = flashCards ?? [];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (sentence: string) => {
    setIsLoading(true);
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    await openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that generates flashcards.",
          },
          {
            role: "user",
            content: `Please generate a list of flashcards with questions and answers based on the topic: ${sentence}`,
          },
        ],
      })
      .then((resp) => {
        const docs: string = resp.choices[0].message.content!;
        if (docs !== undefined) {
          const formatDocList = docs.split("\n");
          const documents: Document[] = [];
          for (let i = 0; i < formatDocList.length; i++) {
            const row = formatDocList[i];
            if (!row.startsWith("Question: ") || row.trim().length === 0) {
              continue;
            }
            const ans = formatDocList[i + 1];
            const document = {
              question: row.replace("Question: ", ""),
              answer: ans.replace("Answer: ", ""),
            };
            documents.push(document);
          }
          const card: Card = {
            id: uuidv4(),
            name: sentence,
            createdAt: Date.now(),
            qAndA: documents,
          };
          setIsLoading(false);
          dispatch(set(card));
        }
      });
  };
  useEffect(() => {
    dispatch(unset());
    return () => {};
  }, []);

  return (
    <div className="d-flex row m-1">
      <SearchBar
        isLoading={isLoading}
        onSubmit={(sentence: string) => handleSearch(sentence)}
      />
      <div>
        <div className="d-flex justify-content-between my-4">
          <h2>Top Flashcards</h2>
          <Link className={"text-white link-underline-dark"} to={"/flashcards"}>
            View All →
          </Link>
        </div>
        <div className="d-flex justify-content-between">
          {cards.length !== 0 &&
            cards.slice(0, 3).map((card: Card, id) => {
              return <FlashCard key={id} card={card} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
