import { CharacterStatus } from "./character-status.ts";
import { CharacterGender } from "./character-gender.ts";

export interface CharacterFilter {
  readonly page: number | null;
  readonly name: string | null;
  readonly status: CharacterStatus | null;
  readonly species: string | null;
  readonly type: string | null;
  readonly gender: CharacterGender | null;
}
