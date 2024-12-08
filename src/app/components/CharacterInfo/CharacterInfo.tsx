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
    <div>
      <p>
        A total of <strong>{charactersShown}</strong> from{" "}
        <strong>{totalCharacters}</strong> characters have been shown.
      </p>
    </div>
  );
}

export default CharacterInfo;
