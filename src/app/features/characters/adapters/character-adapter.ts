import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { Character, CharacterDTO } from "@features/characters/model";
import { LocationLiteAdapter } from "@features/locations/adapters";

export const CharacterAdapter = {
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
  }: CharacterDTO): Character => {
    return {
      id,
      name,
      status: status ? status : null,
      species: species ? species : null,
      type: type ? type : null,
      gender: gender ? gender : null,
      origin: origin ? LocationLiteAdapter.fromDTO(origin) : null,
      location: location ? LocationLiteAdapter.fromDTO(location) : null,
      image: image ? image : null,
      episodeIds: episode ? episode.map(extractEntityIdFromUrl) : null,
      url: url ? url : null,
      created: created ? created : null,
    };
  },
};
