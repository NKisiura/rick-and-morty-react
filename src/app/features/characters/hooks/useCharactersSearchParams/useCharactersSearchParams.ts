import { useSearchParams } from "react-router";
import {
  CharacterFilter,
  CharacterStatus,
  CharacterGender,
} from "@features/characters/model";

export const useCharactersSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchParamsByFilter = ({
    page,
    name,
    status,
    species,
    type,
    gender,
  }: CharacterFilter) => {
    const params = new URLSearchParams();

    if (page) {
      params.set("page", page.toString());
    }

    if (name) {
      params.set("name", name);
    }

    if (status) {
      params.set("status", status);
    }

    if (species) {
      params.set("species", species);
    }

    if (type) {
      params.set("type", type);
    }

    if (gender) {
      params.set("gender", gender);
    }

    setSearchParams(params);
  };

  const extractFilterFromSearchParams = (
    searchParams: URLSearchParams,
  ): CharacterFilter => {
    const { page, name, status, species, type, gender } = Object.fromEntries(
      searchParams.entries(),
    );

    return {
      page: +page || null,
      name: name || null,
      status: status ? (status as CharacterStatus) : null,
      species: species || null,
      type: type || null,
      gender: gender ? (gender as CharacterGender) : null,
    };
  };

  return {
    searchParams,
    setSearchParamsByFilter,
    extractFilterFromSearchParams,
  };
};
