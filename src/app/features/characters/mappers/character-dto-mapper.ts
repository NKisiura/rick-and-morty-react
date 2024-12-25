import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { DTOMapper } from "@shared/mappers";
import { Character, CharacterDTO } from "@features/characters/model";
import { LocationLiteDTOMapper } from "@features/locations/mappers";

export const CharacterDTOMapper: Pick<
  DTOMapper<CharacterDTO, Character>,
  "fromDTO"
> = {
  fromDTO: ({
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
  }): Character => {
    return {
      id,
      name,
      status: status ? status : null,
      species: species ? species : null,
      type: type ? type : null,
      gender: gender ? gender : null,
      origin: origin ? LocationLiteDTOMapper.fromDTO(origin) : null,
      location: location ? LocationLiteDTOMapper.fromDTO(location) : null,
      image: image ? image : null,
      episodeIds: episode ? episode.map(extractEntityIdFromUrl) : null,
      url: url ? url : null,
      created: created ? created : null,
    };
  },
};
