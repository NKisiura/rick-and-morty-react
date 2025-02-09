import { ToEntity } from "@shared/mappers";
import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { Episode } from "@features/episodes/model";
import { EpisodeDto } from "@features/episodes/api";

export class EpisodeDtoMapper implements ToEntity<Episode, EpisodeDto> {
  toEntity({
    id,
    name,
    air_date,
    episode,
    characters,
    url,
    created,
  }: EpisodeDto): Episode {
    return {
      id,
      name,
      airDate: air_date ? air_date : null,
      episode: episode ? episode : null,
      characterIds: characters ? characters.map(extractEntityIdFromUrl) : null,
      url: url ? url : null,
      created: created ? created : null,
    };
  }
}
