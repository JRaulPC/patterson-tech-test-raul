import styles from "@/app/components/CharacterInfo/characterInfo.module.css";
interface CharacterInfoProps {
  currentPage: number;
  totalCharacters: number;
  charactersPerPage: number;
}

function CharacterInfo({
  currentPage,
  totalCharacters,
  charactersPerPage,
}: CharacterInfoProps) {
  const charactersShown = Math.min(
    currentPage * charactersPerPage,
    totalCharacters
  );

  return (
    <div className={styles.characterInfoContainer}>
      <p>
        A total of <strong>{charactersShown}</strong> from{" "}
        <strong>{totalCharacters}</strong> characters have been shown.
      </p>
    </div>
  );
}

export default CharacterInfo;
