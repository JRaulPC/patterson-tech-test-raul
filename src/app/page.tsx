import styles from "@/app/page.module.css";
import getCharacters from "@/services/getCharacters";
import CharacterList from "./components/CharacterList/CharacterList";

export default async function Home() {
  const characters = await getCharacters();

  return (
    <div className={styles.page}>
      <CharacterList characters={characters.results} />
    </div>
  );
}
