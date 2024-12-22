export interface PaginatedResponseDTO<T> {
  readonly info: PaginationInfo;
  readonly results: T[];
}

export interface PaginationInfo {
  readonly count: number;
  readonly pages: number;
  readonly next: string | null;
  readonly prev: string | null;
}
