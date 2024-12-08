import { Character } from "@/app/interfaces/chracter";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "@/app/components/CharacterList/characterList.module.css";
interface ChractersListProps {
  characters: Character[];
}

const CharacterList = ({ characters }: ChractersListProps) => {
  return (
    <ul className={styles.characterList}>
      {characters.map((character, index) => (
        <li key={index}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;