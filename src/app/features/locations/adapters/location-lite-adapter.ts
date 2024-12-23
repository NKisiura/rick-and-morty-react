import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { LocationLite, LocationLiteDTO } from "@features/locations/model";

export const LocationLiteAdapter = {
  fromDTO: ({ name, url }: LocationLiteDTO): LocationLite => {
    return {
      id: url ? extractEntityIdFromUrl(url) : null,
      name,
    };
  },
};
