import { Suspense } from "react";
import CharacterPageWrapper from "./components/CharactersPageWrapper/CharactersPageWrapper";

export default async function Home() {
  return (
    <main>
      <Suspense>
        <CharacterPageWrapper />
      </Suspense>
    </main>
  );
}
