export interface EpisodeDto {
  readonly id: number;
  readonly name: string;
  readonly air_date?: string;
  readonly episode?: string;
  readonly characters?: string[];
  readonly url?: string;
  readonly created?: string;
}
