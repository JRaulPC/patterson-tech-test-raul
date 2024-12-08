export interface GetCharactersResponse {
  info: PaginatioInfo;
  results: Character[];
}

export interface PaginatioInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}
