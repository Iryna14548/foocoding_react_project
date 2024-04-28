export interface Character {
    id: string;
    name: string;
    blood_status: string;
    born: string;
    died: string;
    eye_color: string;
    family_members: Array<string>;
    gender: string;
    hair_color: string;
    house: string;
    jobs: Array<string>;
    nationality: string;
    species: string;
    image: string;
    wiki: string;
}

export interface CharacterResponse {
    characters: Character[];
    amountOfPages: number;
}
