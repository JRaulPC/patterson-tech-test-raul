export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getCharacters = async () => {
  try {
    const response = await fetch(`${apiUrl}/character`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error: unknown) {
    console.error("No se pueden mostrar los personajes", error);

    throw new Error("No se pueden mostrar los personajes");
  }
};

export default getCharacters;
