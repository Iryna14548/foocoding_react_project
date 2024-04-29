export interface Potion {
    id: string;
    name: string;
    image: string;
    effect: string;
    wiki: string;
}

export interface PotionResponse {
    potions: Potion[];
    amountOfPages: number;
}
