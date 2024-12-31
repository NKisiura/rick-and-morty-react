import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  getCharactersByFilter,
  charactersViewLeft,
  selectCharacters,
  selectCharactersLoadingStatus,
} from "@features/characters/store";
import {
  CharacterCard,
  CharacterSkeletonCard,
  CharacterList,
} from "@features/characters/ui/components";

export const Characters = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const characters = useAppSelector(selectCharacters);
  const charactersLoadingStatus = useAppSelector(selectCharactersLoadingStatus);

  useEffect(() => {
    void dispatch(getCharactersByFilter({}));

    return () => {
      dispatch(charactersViewLeft());
    };
  }, []);

  const handleCardClick = (characterId: number) => {
    void navigate(characterId.toString());
  };

  return (
    <div className="container py-4">
      {charactersLoadingStatus === "pending" && (
        <CharacterList>
          {Array.from({ length: 20 }).map((_, index) => (
            <CharacterSkeletonCard key={index}></CharacterSkeletonCard>
          ))}
        </CharacterList>
      )}

      {charactersLoadingStatus === "succeeded" && (
        <CharacterList>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onCardClick={() => {
                handleCardClick(character.id);
              }}
            ></CharacterCard>
          ))}
        </CharacterList>
      )}
    </div>
  );
};

export default Characters;
