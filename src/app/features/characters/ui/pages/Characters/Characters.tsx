import { Link } from "react-router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  getCharactersByFilter,
  charactersViewLeft,
  selectCharacters,
  selectCharactersLoadingStatus,
} from "@features/characters/store";

export const Characters = () => {
  const dispatch = useAppDispatch();

  const characters = useAppSelector(selectCharacters);
  const charactersLoadingStatus = useAppSelector(selectCharactersLoadingStatus);

  useEffect(() => {
    void dispatch(getCharactersByFilter({}));

    return () => {
      dispatch(charactersViewLeft());
    };
  }, []);

  return (
    <div>
      {charactersLoadingStatus === "pending" && (
        <div className="text-xl text-green-400">Loading...</div>
      )}
      {charactersLoadingStatus === "succeeded" &&
        characters.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      <Link to={"1"}> to character details</Link>
    </div>
  );
};

export default Characters;
