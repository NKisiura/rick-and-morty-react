export interface Episode {
  readonly id: number;
  readonly name: string;
  readonly airDate: string | null;
  readonly episode: string | null;
  readonly characterIds: number[] | null;
  readonly url: string | null;
  readonly created: string | null;
}
