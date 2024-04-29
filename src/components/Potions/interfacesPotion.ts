export interface Potion {
    id: string;
    name: string;
    characteristics: string;
    difficulty: string;
    ingredients: string;
    inventors: string;
    image: string;
    effect: string;
    wiki: string;
}

export interface PotionResponse {
    potions: Potion[];
    amountOfPages: number;
}
