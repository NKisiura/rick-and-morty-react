import { HttpBase } from "@shared/http-client";
import { HttpRequestConfig } from "@shared/http-client/http-client.ts";
import { PaginatedResponse } from "@shared/types/http";
import { EpisodeDto } from "@features/episodes/api";
import { EpisodeDtoMapper } from "@features/episodes/mappers";
import { Episode, EpisodeFilter } from "@features/episodes/model";

export class EpisodesService extends HttpBase {
  private readonly BASE_URL = "episode";

  async getEpisodeById(
    id: number,
    config?: Pick<HttpRequestConfig, "signal">,
  ): Promise<Episode> {
    const episodeDtoMapper = new EpisodeDtoMapper();

    const { data } = await this.http.get<EpisodeDto>(
      `${this.BASE_URL}/${id.toString()}`,
      { ...config },
    );

    return episodeDtoMapper.toEntity(data);
  }

  async getEpisodesByIdList(
    idList: number[],
    config?: Pick<HttpRequestConfig, "signal">,
  ): Promise<Episode[]> {
    const episodeDtoMapper = new EpisodeDtoMapper();

    const { data } = await this.http.get<EpisodeDto | EpisodeDto[]>(
      `${this.BASE_URL}/${idList.join(",")}`,
      { ...config },
    );

    return Array.isArray(data)
      ? data.map((dto) => episodeDtoMapper.toEntity(dto))
      : [episodeDtoMapper.toEntity(data)];
  }

  async getEpisodesByFilter(
    filter: EpisodeFilter,
    config?: Pick<HttpRequestConfig, "signal">,
  ): Promise<PaginatedResponse<Episode>> {
    const episodeDtoMapper = new EpisodeDtoMapper();

    const { data } = await this.http.get<PaginatedResponse<EpisodeDto>>(
      this.BASE_URL,
      {
        params: filter,
        ...config,
      },
    );
    const { info, results } = data;

    return {
      info,
      results: results.map((dto) => episodeDtoMapper.toEntity(dto)),
    };
  }
}
