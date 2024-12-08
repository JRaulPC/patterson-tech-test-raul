import { Character } from "@/app/interfaces/chracter";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "@/app/components/CharacterList/characterList.module.css";

interface CharactersListProps {
  characters: Character[];
  onPickCharacter: (character: Character) => void;
}

const CharacterList = ({
  characters,
  onPickCharacter,
}: CharactersListProps) => {
  return (
    <>
      <ul className={styles.characterList}>
        {characters.map((character) => (
          <li key={character.id} onClick={() => onPickCharacter(character)}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
