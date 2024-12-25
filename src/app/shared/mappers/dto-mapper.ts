export interface DTOMapper<D, E> {
  fromDTO: (dto: D) => E;
  toDTO: (entity: E) => D;
}
