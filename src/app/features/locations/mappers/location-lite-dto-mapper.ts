import { DTOMapper } from "@shared/mappers";
import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { LocationLite, LocationLiteDTO } from "@features/locations/model";

export const LocationLiteDTOMapper: Pick<
  DTOMapper<LocationLiteDTO, LocationLite>,
  "fromDTO"
> = {
  fromDTO: ({ name, url }): LocationLite => {
    return {
      id: url ? extractEntityIdFromUrl(url) : null,
      name,
    };
  },
};
