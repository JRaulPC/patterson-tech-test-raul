"use client";

import Image from "next/image";
import { Character } from "@/app/interfaces/chracter";
import styles from "@/app/components/CharacterDetailModal/characterDetaiModal.module.css";

interface CharacterDetailsModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterDetailsModal = ({
  character,
  onClose,
}: CharacterDetailsModalProps) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.characterDetails}>
          <Image
            src={character.image}
            alt={character.name}
            width={400}
            height={400}
            className={styles.characterImage}
          />

          <div className={styles.characterInfo}>
            <h2>{character.name}</h2>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Type:</strong> {character.type || "Unknown"}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Location:</strong> {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsModal;
