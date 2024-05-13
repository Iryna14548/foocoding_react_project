import { Spell, SpellResponse } from '../components/Spells/interfacesSpell';

const createSpellObject = (spellDataObject: any): Spell => {
    const attribute = spellDataObject.attributes;

    const spell: Spell = {
        id: spellDataObject.id,
        name: attribute.name,
        effect: attribute.effect,
        handle: attribute.handle,
        incantation: attribute.incantation,
        light: attribute.light,
        image: attribute.image,
        category: attribute.category,
        creator: attribute.creator,

        wiki: attribute.wiki,
    };

    return spell;
};

export const fetchSpells = async (page: number, searchInput: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com//v1/spells?
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

        const spells: Spell[] = data.data.map((spellDataObject: any) => {
            return createSpellObject(spellDataObject);
        });

        const spellResponse: SpellResponse = {
            spells: spells,
            amountOfPages: data.meta.pagination.last ?? page,
        };

        return spellResponse;
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return { spells: [], amountOfPages: 0 };
    }
};

export const fetchSpell = async (name: string) => {
    try {
        const response = await fetch(
            `https://api.potterdb.com//v1/spells?
            filter[name_i_cont_all][]=${name}&
            page[size]=12`
                .trim()
                .replace(/\s/g, '')
        );
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        const dataSpell = data.data[0];

        if (dataSpell) {
            return createSpellObject(dataSpell);
        } else {
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch or parse data:', error);
        return null;
    }
};
