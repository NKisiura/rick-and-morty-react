import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  selectCharacters,
  selectCharactersErrorMessage,
  selectCharactersLoadingStatus,
  selectCharactersPaginationInfo,
  charactersCleaned,
} from "@features/characters/store";
import { useAbortableGetCharactersByFilter } from "@features/characters/hooks/useAbortableGetCharactersByFilter";
import { useCharactersSearchParams } from "@features/characters/hooks/useCharactersSearchParams";
import { CharacterFilter } from "@features/characters/model";

export const useCharacters = () => {
  const dispatch = useAppDispatch();
  const { getCharactersByFilter } = useAbortableGetCharactersByFilter();
  const {
    searchParamsFilter,
    setSearchParamsFilter,
    debouncedSetSearchParamsFilter,
  } = useCharactersSearchParams();

  const characters = useAppSelector(selectCharacters);
  const loadingStatus = useAppSelector(selectCharactersLoadingStatus);
  const errorMessage = useAppSelector(selectCharactersErrorMessage);
  const paginationInfo = useAppSelector(selectCharactersPaginationInfo);

  const handleFilterChange = useCallback(
    (filter: CharacterFilter) => {
      setSearchParamsFilter(filter);
    },
    [setSearchParamsFilter],
  );

  const handleFilterChangeWithDebounce = useCallback(
    (filter: CharacterFilter) => {
      debouncedSetSearchParamsFilter(filter);
    },
    [debouncedSetSearchParamsFilter],
  );

  const handleRetry = useCallback(() => {
    getCharactersByFilter(searchParamsFilter);
  }, [getCharactersByFilter, searchParamsFilter]);

  useEffect(() => {
    getCharactersByFilter(searchParamsFilter);
  }, [getCharactersByFilter, searchParamsFilter]);

  useEffect(() => {
    return () => {
      dispatch(charactersCleaned());
    };
  }, [dispatch]);

  return {
    filter: searchParamsFilter,
    characters,
    loadingStatus,
    errorMessage,
    paginationInfo,
    handleFilterChange,
    handleFilterChangeWithDebounce,
    handleRetry,
  };
};
