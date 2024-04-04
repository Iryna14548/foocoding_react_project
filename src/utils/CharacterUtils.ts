import { Character } from '../components/App';

export interface CharacterResponse {
    characters: Character[];
    amountOfPages: number;
}

export const fetchCharacters = async (page: number, searchInput: string) => {
    try {
        // const response = await fetch(
        //     `https://api.potterdb.com/v1/characters?filter[name_not_cont_any]=Unidentified&filter[name_not_cont]=Muggle&filter[blood_status_not_null]=1&filter[species_not_null]=1&filter[hair_color_not_null]=1&page[number]=${page}&page[size]=20`
        // );

        const response = await fetch(
            `https://api.potterdb.com/v1/characters?
            filter[name_not_i_cont_all][]=Muggle&
            filter[name_not_i_cont_all][]=Unidentified&
            filter[name_not_i_cont_all][]=mother&
            filter[name_not_i_cont_all][]=Unidentfied&
            filter[name_i_cont_all][]=${searchInput}&
            filter[species_not_null]=1&
            filter[hair_color_not_null]=1&
            page[number]=${page}&
            page[size]=15`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const characters: Character[] = data.data.map((characterDataObject: any) => {
            const attribute = characterDataObject.attributes;
            const character: Character = {
                id: characterDataObject.id,
                image: attribute.image,
                name: attribute.name,
                species: attribute.species,
            };
            return character;
        });

        const characterResponse: CharacterResponse = {
            characters,
            amountOfPages: data.meta.pagination.last ?? page,
        };
        return characterResponse;
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return { characters: [], amountOfPages: 0 };
    }
};
