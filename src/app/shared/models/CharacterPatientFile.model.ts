export interface CharacterPatientFile {
    personID: string;
    name: string;
    otherNames?: string;
    familyName?: string;
    ship?: string;
    organisation?: string;
    imageLocation?: string;
    gender: string;
    specialAttention: boolean;
    specialAttentionDescription?: string;
    bloodType?: string;
    allele?: string;
    dateOfBirth?: Date;
    planetOfOrigin?: string;
    notes?: string;
    npc: boolean;
    height?: number;
    weight?: number;
    alive: boolean;
}
