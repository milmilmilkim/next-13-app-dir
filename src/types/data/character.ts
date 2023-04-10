interface Character {
  name: string;
  age: number;
  gender: string;
  description: string;
  appearance: string[];
  job: string;
  personality: string[];
}

interface ExtendedCharacter extends Character {
  sampleDialogue?: string[];
  relationship?: string;
  sexuality?: string;
  race?: string;
  [x: string]: any;
}
