import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  selectCharacters,
  selectCharactersErrorMessage,
  selectCharactersFilter,
  selectCharactersLoadingStatus,
  selectCharactersPaginationInfo,
  charactersViewLeft,
  updateCharactersFilterAndRefetch,
  getCharactersByFilter,
} from "@features/characters/store";
import { useCharactersSearchParams } from "@features/characters/hooks/useCharactersSearchParams";
import { CharacterFilter } from "@features/characters/model";

export const useCharacters = () => {
  const dispatch = useAppDispatch();
  const {
    searchParams,
    setSearchParamsByFilter,
    extractFilterFromSearchParams,
  } = useCharactersSearchParams();

  const filter = useAppSelector(selectCharactersFilter);
  const characters = useAppSelector(selectCharacters);
  const loadingStatus = useAppSelector(selectCharactersLoadingStatus);
  const errorMessage = useAppSelector(selectCharactersErrorMessage);
  const paginationInfo = useAppSelector(selectCharactersPaginationInfo);

  const handleFilterChange = (filter: CharacterFilter) => {
    setSearchParamsByFilter(filter);
  };

  const handleRetry = () => {
    void dispatch(getCharactersByFilter(filter));
  };

  useEffect(() => {
    const filter = extractFilterFromSearchParams(searchParams);
    dispatch(updateCharactersFilterAndRefetch(filter));
  }, [searchParams]);

  useEffect(() => {
    return () => {
      dispatch(charactersViewLeft());
    };
  }, []);

  return {
    filter,
    characters,
    loadingStatus,
    errorMessage,
    paginationInfo,
    handleFilterChange,
    handleRetry,
  };
};
