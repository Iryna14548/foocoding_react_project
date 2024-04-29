import { Potion, PotionResponse } from '../components/Potions/interfacesPotion';

const createPotionObject = (potionDataObject: any): Potion => {
    const attribute = potionDataObject.attributes;

    const potion: Potion = {
        id: potionDataObject.id,
        name: attribute.name,
        characteristics: attribute.characteristics,
        difficulty: attribute.difficulty,
        ingredients: attribute.ingredients,
        inventors: attribute.inventors,
        image: attribute.image,
        effect: attribute.effect,
        wiki: attribute.wiki,
    };

    return potion;
};

export const fetchPotions = async (page: number, searchInput: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com/v1/potions?
            filter[name_i_cont_all][]=${searchInput}&
            page[number]=${page}&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );

        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const potions: Potion[] = data.data.map((potionDataObject: any) => {
            return createPotionObject(potionDataObject);
        });

        const potionResponse: PotionResponse = {
            potions: potions,
            amountOfPages: data.meta.pagination.last ?? page,
        };

        return potionResponse;
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return { potions: [], amountOfPages: 0 };
    }
};

export const fetchPotion = async (name: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com/v1/potions?
            filter[name_i_cont_all][]=${name}&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const dataPotion = data.data[0];

        if (dataPotion) {
            return createPotionObject(dataPotion);
        } else {
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return null;
    }
};
