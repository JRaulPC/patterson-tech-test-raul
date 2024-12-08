import { Character } from "@/app/interfaces/chracter";
import Image from "next/image";
import styles from "@/app/components/CharacterCard/characterCard.module.css";
import CharacterDetailsModal from "../CharacterDetailModal/CharacterDetailModal";
import { useEffect, useState } from "react";

interface ChractersListProps {
  character: Character;
}

const CharacterCard = ({
  character,
  character: { name, image },
}: ChractersListProps) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedCharacter) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCharacter]);

  return (
    <article className={styles.characterCard}>
      <Image
        className={styles.characterCardImage}
        src={image}
        alt={name}
        width={300}
        height={300}
      />
      <div className={styles.infoWrapper}>
        <h2 className={styles.characterTitle}>{name}</h2>
        <button onClick={() => handleCardClick(character)}>Info</button>
      </div>
      {selectedCharacter && (
        <CharacterDetailsModal
          character={selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
    </article>
  );
};

export default CharacterCard;
