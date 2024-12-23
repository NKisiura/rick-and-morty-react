import { CharacterStatus } from "./character-status.ts";
import { CharacterGender } from "./character-gender.ts";
import { LocationLite } from "@features/locations/model";

export interface Character {
  readonly id: number;
  readonly name: string;
  readonly status: CharacterStatus | null;
  readonly species: string | null;
  readonly type: string | null;
  readonly gender: CharacterGender | null;
  readonly origin: LocationLite | null;
  readonly location: LocationLite | null;
  readonly image: string | null;
  readonly episodeIds: number[] | null;
  readonly url: string | null;
  readonly created: string | null;
}
