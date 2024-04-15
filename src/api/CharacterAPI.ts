import { Character, CharacterResponse } from '../components/Characters/interfaces';

const createCharacterObject = (characterDataObject: any): Character => {
    const attribute = characterDataObject.attributes;

    const character: Character = {
        id: characterDataObject.id,
        name: attribute.name,
        blood_status: attribute.blood_status ?? '',
        born: attribute.born ?? '',
        died: attribute.died ?? '',
        eye_color: attribute.eye_color ?? '',
        family_members: attribute.family_members ?? [],
        gender: attribute.gender ?? '',
        hair_color: attribute.hair_color ?? '',
        house: attribute.house ?? '',
        jobs: attribute.jobs ?? [],
        nationality: attribute.nationality ?? '',
        species: attribute.species ?? '',
        image: attribute.image,
        wiki: attribute.wiki,
    };

    return character;
};

export const fetchCharacters = async (page: number, searchInput: string) => {
    try {
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
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const characters: Character[] = data.data.map((characterDataObject: any) => {
            return createCharacterObject(characterDataObject);
        });

        const characterResponse: CharacterResponse = {
            characters: characters,
            amountOfPages: data.meta.pagination.last ?? page,
        };
        return characterResponse;
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return { characters: [], amountOfPages: 0 };
    }
};

export const fetchCharacter = async (name: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com/v1/characters?
            filter[name_not_i_cont_all][]=Muggle&
            filter[name_not_i_cont_all][]=Unidentified&
            filter[name_not_i_cont_all][]=mother&
            filter[name_not_i_cont_all][]=Unidentfied&
            filter[name_i_cont_all][]=${name}&
            filter[species_not_null]=1&
            filter[hair_color_not_null]=1&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const dataCharacter = data.data[0];

        if (dataCharacter) {
            return createCharacterObject(dataCharacter);
        } else {
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return null;
    }
};
