import { CharacterGender, CharacterStatus } from "@features/characters/model";
import { LocationLiteDto } from "@features/locations/api";

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
