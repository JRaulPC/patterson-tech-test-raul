"use client";
import { Character } from "@/app/interfaces/chracter";
import getCharacters from "@/services/getCharacters";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CharacterList from "../CharacterList/CharacterList";
import Pagination from "../Pagination/Pagination";
import CharacterInfo from "@/app/components/CharacterInfo/CharacterInfo";

export default function CharactersPageWrapper() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);

  const [pages, setPages] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [charactersPerPage, setCharactersPerPage] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(page);
      setPages(data.info.pages);
      setTotalCharacters(data.info.count);
      setCharactersPerPage(data.results.length);

      setCharacters(data.results);
    };
    fetchCharacters();

    // Update URL
    router.push(`?page=${page}`);
  }, [page, router]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <Pagination
        currentPage={page}
        totalPages={pages}
        onPageChange={handlePageChange}
      />
      <CharacterInfo
        currentPage={page}
        totalCharacters={totalCharacters}
        charactersPerPage={charactersPerPage}
      />
      <div>
        <CharacterList characters={characters} />
      </div>
    </div>
  );
}
