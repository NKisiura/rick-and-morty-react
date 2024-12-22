import { CharacterStatus } from "./character-status.ts";
import { CharacterGender } from "./character-gender.ts";
import { LocationLiteDTO } from "@features/locations/model";

export interface CharacterDTO {
  readonly id: number;
  readonly name: string;
  readonly status?: CharacterStatus;
  readonly species?: string;
  readonly type?: string;
  readonly gender?: CharacterGender;
  readonly origin?: LocationLiteDTO;
  readonly location?: LocationLiteDTO;
  readonly image?: string;
  readonly episode?: string[];
  readonly url?: string;
  readonly created?: string;
}
