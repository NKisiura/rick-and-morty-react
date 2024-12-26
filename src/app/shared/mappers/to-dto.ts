export interface ToDto<Entity, Dto> {
  toDTO(entity: Entity): Dto;
}
