export interface Potion {
    id: string;
    name: string;
    image: string;
    effect: string;
}

export interface PotionResponse {
    potions: Potion[];
    amountOfPages: number;
}
