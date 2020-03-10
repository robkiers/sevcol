export interface CharcterActivity {
  personID: string;
  cardNumber?: string;

  name: string;
  familyName: string;
  imageLocation?: string;

  active: boolean;
  disembarked: boolean;
  alive: boolean;
}
