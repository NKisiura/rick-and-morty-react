import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch } from "@app/store/hooks.ts";
import { getCharactersByFilter } from "@features/characters/store";
import { CharacterFilter } from "@features/characters/model";

export const useAbortableGetCharactersByFilter = () => {
  const abortSignalRef = useRef<() => void>();
  const dispatch = useAppDispatch();

  const abortableGetCharactersByFilter = useCallback(
    (filter: CharacterFilter) => {
      if (abortSignalRef.current) {
        abortSignalRef.current();
      }

      const { abort } = dispatch(getCharactersByFilter(filter));
      abortSignalRef.current = abort;
    },
    [dispatch],
  );

  useEffect(() => {
    return () => {
      if (abortSignalRef.current) {
        abortSignalRef.current();
      }
    };
  }, []);

  return {
    getCharactersByFilter: abortableGetCharactersByFilter,
  };
};
