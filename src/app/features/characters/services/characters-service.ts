import { HttpBase } from "@shared/http-client";
import { PaginatedResponse } from "@shared/types/http";
import { CharacterDtoMapper } from "@features/characters/mappers";
import {
  Character,
  CharacterDto,
  CharacterFilter,
} from "@features/characters/model";

export class CharactersService extends HttpBase {
  private readonly BASE_URL = "character";

  async getCharacterById(id: number): Promise<Character> {
    const characterDtoMapper = new CharacterDtoMapper();

    const { data } = await this.http.get<CharacterDto>(
      `${this.BASE_URL}/${id.toString()}`,
    );

    return characterDtoMapper.toEntity(data);
  }

  async getCharactersByIdList(idList: number[]): Promise<Character[]> {
    const characterDtoMapper = new CharacterDtoMapper();

    const { data } = await this.http.get<CharacterDto | CharacterDto[]>(
      `${this.BASE_URL}/${idList.join(",")}`,
    );

    return Array.isArray(data)
      ? data.map((dto) => characterDtoMapper.toEntity(dto))
      : [characterDtoMapper.toEntity(data)];
  }

  async getCharactersByFilter(
    filter: CharacterFilter,
  ): Promise<PaginatedResponse<Character>> {
    const characterDtoMapper = new CharacterDtoMapper();

    const { data } = await this.http.get<PaginatedResponse<CharacterDto>>(
      this.BASE_URL,
      {
        params: filter,
      },
    );
    const { info, results } = data;

    return {
      info,
      results: results.map((dto) => characterDtoMapper.toEntity(dto)),
    };
  }
}
