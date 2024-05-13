export interface Spell {
    id: string;
    name: string;
    effect: string;
    handle: string;
    incantation: string;
    light: string;
    image: string;
    category: string;
    creator: string;
    wiki: string;
}

export interface SpellResponse {
    spells: Spell[];
    amountOfPages: number;
}
