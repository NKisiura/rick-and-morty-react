import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Alert, Button } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks.ts";
import {
  getCharactersByFilter,
  charactersViewLeft,
  selectCharacters,
  selectCharactersLoadingStatus,
  selectCharactersErrorMessage,
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
  const errorMessage = useAppSelector(selectCharactersErrorMessage);

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
      <div className="flex flex-col items-center gap-4">
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

        {/*TODO: implement retry logic*/}
        {charactersLoadingStatus === "failed" && (
          <Alert
            title={"Error"}
            description={errorMessage}
            endContent={<Button color={"danger"}>Retry</Button>}
            color={"danger"}
            variant={"faded"}
            classNames={{ base: "sm:max-w-[75%] xl:max-w-[50%]" }}
          />
        )}
      </div>
    </div>
  );
};

export default Characters;
