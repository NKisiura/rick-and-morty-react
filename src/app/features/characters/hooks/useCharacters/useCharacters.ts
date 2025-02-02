import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  selectCharacters,
  selectCharactersErrorMessage,
  selectCharactersLoadingStatus,
  selectCharactersPaginationInfo,
  charactersCleaned,
  getCharactersByFilter,
} from "@features/characters/store";
import { useCharactersSearchParams } from "@features/characters/hooks/useCharactersSearchParams";
import { CharacterFilter } from "@features/characters/model";

export const useCharacters = () => {
  const dispatch = useAppDispatch();

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
    void dispatch(getCharactersByFilter(searchParamsFilter));
  }, [dispatch, searchParamsFilter]);

  useEffect(() => {
    const { abort } = dispatch(getCharactersByFilter(searchParamsFilter));

    return () => {
      abort();
    };
  }, [dispatch, searchParamsFilter]);

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
