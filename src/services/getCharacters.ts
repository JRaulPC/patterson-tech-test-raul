import { GetCharactersResponse } from "@/app/interfaces/chracter";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getCharacters = async (): Promise<GetCharactersResponse> => {
  try {
    const response = await fetch(`${apiUrl}/character`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error: unknown) {
    console.error("Couldn't get characters", error);

    throw new Error("Couldn't get characters");
  }
};

export default getCharacters;
