import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import { useConcurrentDispatchAborter } from "@app/hooks/useConcurrentDispatchAborter";
import {
  selectCharacters,
  selectCharactersErrorMessage,
  selectCharactersLoadingStatus,
  selectCharactersPaginationInfo,
  charactersCleaned,
  getCharactersByFilter as getCharactersByFilterAction,
} from "@features/characters/store";
import { useCharactersSearchParams } from "@features/characters/hooks/useCharactersSearchParams";
import { CharacterFilter } from "@features/characters/model";

export const useCharacters = () => {
  const dispatch = useAppDispatch();
  const concurrentDispatchAborter = useConcurrentDispatchAborter();

  const {
    searchParamsFilter,
    setSearchParamsFilter,
    debouncedSetSearchParamsFilter,
  } = useCharactersSearchParams();

  const characters = useAppSelector(selectCharacters);
  const loadingStatus = useAppSelector(selectCharactersLoadingStatus);
  const errorMessage = useAppSelector(selectCharactersErrorMessage);
  const paginationInfo = useAppSelector(selectCharactersPaginationInfo);

  const getCharactersByFilter = useCallback(
    (filter: CharacterFilter) => {
      concurrentDispatchAborter(
        dispatch(getCharactersByFilterAction(filter)),
        getCharactersByFilterAction.typePrefix,
      );
    },
    [concurrentDispatchAborter, dispatch],
  );

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
