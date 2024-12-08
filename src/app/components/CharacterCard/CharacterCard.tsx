import { Character } from "@/app/interfaces/chracter";
import Image from "next/image";
import styles from "@/app/components/CharacterCard/characterCard.module.css";

interface ChractersListProps {
  character: Character;
}

const CharacterCard = ({ character: { name, image } }: ChractersListProps) => {
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
        <h2>{name}</h2>
        <button>Info</button>
      </div>
    </article>
  );
};

export default CharacterCard;
