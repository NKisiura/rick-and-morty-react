import { ToEntity } from "@shared/mappers";
import { extractEntityIdFromUrl } from "@shared/utils/extract-entity-id-from-url";
import { LocationLite, LocationLiteDto } from "@features/locations/model";

export class LocationLiteDtoMapper
  implements ToEntity<LocationLite, LocationLiteDto>
{
  toEntity({ name, url }: LocationLiteDto): LocationLite {
    return {
      id: url ? extractEntityIdFromUrl(url) : null,
      name,
    };
  }
}
