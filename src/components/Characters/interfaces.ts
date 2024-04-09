export interface Character {
    id: string;
    image: string;
    name: string;
    species: string;
}

export interface CharacterResponse {
    characters: Character[];
    amountOfPages: number;
}
