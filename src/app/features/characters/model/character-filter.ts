import { CharacterStatus } from "./character-status.ts";
import { CharacterGender } from "./character-gender.ts";

export interface CharacterFilter {
  page?: number | null;
  name?: string | null;
  status?: CharacterStatus | null;
  species?: string | null;
  type?: string | null;
  gender?: CharacterGender | null;
}
