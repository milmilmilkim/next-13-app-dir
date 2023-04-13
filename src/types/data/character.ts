export interface Character {
  id: string;
  name: string;
  description: string;
  age?: number;
  gender?: string;
  job?: string;
  personality?: string[];
  appearance?: string[];
  sampleDialogue?: string[];
  relationship?: string;
  sexuality?: string;
  race?: string;
  [x: string]: any;
}
