import { useCallback, useEffect, useMemo, useRef } from "react";
import { debounce } from "lodash-es";
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
  const abortSignalRef = useRef<() => void>();

  const dispatch = useAppDispatch();
  const { searchParamsFilter, setSearchParamsFilter } =
    useCharactersSearchParams();

  const characters = useAppSelector(selectCharacters);
  const loadingStatus = useAppSelector(selectCharactersLoadingStatus);
  const errorMessage = useAppSelector(selectCharactersErrorMessage);
  const paginationInfo = useAppSelector(selectCharactersPaginationInfo);

  const getCharacters = useCallback(
    (filter: CharacterFilter) => {
      if (abortSignalRef.current) {
        abortSignalRef.current();
      }

      const { abort } = dispatch(getCharactersByFilter(filter));
      abortSignalRef.current = abort;
    },
    [dispatch],
  );

  const debouncedGetCharacters = useMemo(() => {
    return debounce((filter: CharacterFilter) => {
      getCharacters(filter);
    }, 1000);
  }, [getCharacters]);

  const handleFilterChange = useCallback(
    (filter: CharacterFilter) => {
      const nextFilter = { ...filter, page: 1 };

      setSearchParamsFilter(nextFilter);
      debouncedGetCharacters(nextFilter);
    },
    [debouncedGetCharacters, setSearchParamsFilter],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      const filter = { ...searchParamsFilter, page };

      setSearchParamsFilter(filter);
      getCharacters(filter);
    },
    [getCharacters, searchParamsFilter, setSearchParamsFilter],
  );

  const handleRetry = useCallback(() => {
    getCharacters(searchParamsFilter);
  }, [getCharacters, searchParamsFilter]);

  useEffect(() => {
    getCharacters(searchParamsFilter);

    return () => {
      if (abortSignalRef.current) {
        abortSignalRef.current();
      }

      dispatch(charactersCleaned());
    };
  }, []);

  return {
    filter: searchParamsFilter,
    characters,
    loadingStatus,
    errorMessage,
    paginationInfo,
    handlePageChange,
    handleFilterChange,
    handleRetry,
  };
};
