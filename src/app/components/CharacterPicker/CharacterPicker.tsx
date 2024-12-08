"use client";

import Image from "next/image";
import { Character } from "@/app/interfaces/chracter";
import React, { useEffect, useState } from "react";
import styles from "@/app/components/CharacterPicker/characterPicker.module.css";
import { Episode } from "@/app/interfaces/episode";

interface CharacterPickerProps {
  pickedCharacters: Character[];
  clearPickedCharactersAction: () => void;
}

export default function CharacterPicker({
  pickedCharacters,
  clearPickedCharactersAction,
}: CharacterPickerProps) {
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchSharedEpisodes = async () => {
      if (pickedCharacters.length < 2) {
        setSharedEpisodes([]);
        return;
      }

      const [firstCharacter, secondCharacter] = pickedCharacters;
      const sharedEpisodeUrls = firstCharacter.episode.filter((ep) =>
        secondCharacter.episode.includes(ep)
      );

      const episodes = await Promise.all(
        sharedEpisodeUrls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        })
      );

      setSharedEpisodes(episodes);
    };

    fetchSharedEpisodes();
  }, [pickedCharacters]);

  return (
    <div className={styles.pickedCharactersContainer}>
      <div className={styles.titleContainer}>
        <h2>Picked Characters</h2>
        <button
          className={styles.clearButton}
          onClick={clearPickedCharactersAction}
        >
          Clear
        </button>
      </div>
      <section className={styles.pickedCharacters}>
        {pickedCharacters.map((character) => (
          <div key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
            />
            <strong>{character.name}</strong>
          </div>
        ))}
      </section>
      {pickedCharacters.length >= 2 && sharedEpisodes.length > 0 ? (
        <div>
          <h3 className={styles.sharedEpisodesTitle}>Shared Episodes</h3>
          <ul className={styles.sharedEpisodesList}>
            {sharedEpisodes.map((episode) => (
              <li key={episode.id}>
                <strong>{episode.name}</strong> ({episode.episode})
              </li>
            ))}
          </ul>
        </div>
      ) : pickedCharacters.length >= 2 && sharedEpisodes.length === 0 ? (
        <p>No shared episodes</p>
      ) : null}{" "}
      {/* Only show "No shared episodes" if there are 2+ characters picked */}
    </div>
  );
}
