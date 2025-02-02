import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  selectCharacters,
  selectCharactersErrorMessage,
  selectCharactersLoadingStatus,
  charactersCleaned,
  getCharacterById,
} from "@features/characters/store";

export const useCharacterDetails = () => {
  const dispatch = useAppDispatch();

  const { id: characterId } = useParams();

  const characters = useAppSelector(selectCharacters);
  const charactersLoadingStatus = useAppSelector(selectCharactersLoadingStatus);
  const charactersErrorMessage = useAppSelector(selectCharactersErrorMessage);

  const character = useMemo(() => {
    if (!characterId) return null;

    return characters.find(({ id }) => id === +characterId) ?? null;
  }, [characterId, characters]);

  useEffect(() => {
    if (!characterId) return;

    const { abort } = dispatch(getCharacterById(+characterId));

    return () => {
      abort();
    };
  }, [dispatch, characterId]);

  useEffect(() => {
    return () => {
      dispatch(charactersCleaned());
    };
  }, [dispatch]);

  return {
    character,
    characterLoadingStatus: charactersLoadingStatus,
    characterErrorMessage: charactersErrorMessage,
  };
};
