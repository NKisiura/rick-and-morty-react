import { CharacterStatus } from "./character-status.ts";
import { CharacterGender } from "./character-gender.ts";
import { LocationLiteDto } from "@features/locations/model";

export interface CharacterDto {
  readonly id: number;
  readonly name: string;
  readonly status?: CharacterStatus;
  readonly species?: string;
  readonly type?: string;
  readonly gender?: CharacterGender;
  readonly origin?: LocationLiteDto;
  readonly location?: LocationLiteDto;
  readonly image?: string;
  readonly episode?: string[];
  readonly url?: string;
  readonly created?: string;
}
