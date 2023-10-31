import { v4 as uuidv4 } from "uuid";
import { Document } from "./Document";

interface Card {
  id: string;
  name: string;
  createdAt: number;
  qAndA: Document[];
}

export default Card;
