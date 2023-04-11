export interface Character {
  name: string;
  age: number;
  gender: string;
  description: string;
  job?: string;
  personality?: string[];
}

export interface ExtendedCharacter extends Character {
  appearance: string[];
  sampleDialogue?: string[];
  relationship?: string;
  sexuality?: string;
  race?: string;
  [x: string]: any;
}
