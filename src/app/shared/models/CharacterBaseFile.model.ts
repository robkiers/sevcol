export interface CharacterBaseFile {
    personID: string;
    name: string;
    otherNames?: string;
    familyName: string;
    gender: string;
    height?: number;
    weight?: number;
    planetOfOrigin?: string;
    dateOfBirth?: Date;
    imageLocation?: string;
    certificates?: string[];
    organisation?: string;
    ship?: string;
    cardNumber?: string;
    disembarked: boolean;
    active: boolean;

    alive: boolean;
    // datedeceased

    npc: boolean;
}
