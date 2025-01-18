import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { ToEntity } from "@shared/mappers";
import { Character } from "@features/characters/model";
import { CharacterDto } from "@features/characters/api";
import { LocationLiteDtoMapper } from "@features/locations/mappers";

export class CharacterDtoMapper implements ToEntity<Character, CharacterDto> {
  toEntity({
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  }: CharacterDto): Character {
    const locationLiteDtoMapper = new LocationLiteDtoMapper();

    return {
      id,
      name,
      status: status ? status : null,
      species: species ? species : null,
      type: type ? type : null,
      gender: gender ? gender : null,
      origin: origin ? locationLiteDtoMapper.toEntity(origin) : null,
      location: location ? locationLiteDtoMapper.toEntity(location) : null,
      image: image ? image : null,
      episodeIds: episode ? episode.map(extractEntityIdFromUrl) : null,
      url: url ? url : null,
      created: created ? created : null,
    };
  }
}
