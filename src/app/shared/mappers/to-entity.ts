export interface ToEntity<Entity, Dto> {
  toEntity(dto: Dto): Entity;
}
