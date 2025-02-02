import { Link } from "react-router";
import { Button } from "@heroui/react";
import { ErrorMessage } from "@shared/ui/ErrorMessage";
import { useCharacterDetails } from "@features/characters/hooks/useCharacterDetails ";
import { DetailedCharacter } from "@features/characters/ui/components";

export const CharacterDetails = () => {
  const { character, characterLoadingStatus, characterErrorMessage } =
    useCharacterDetails();

  return (
    <div className="container py-4">
      {characterLoadingStatus === "pending" && <DetailedCharacter.Skeleton />}

      {characterLoadingStatus === "succeeded" && character && (
        <DetailedCharacter character={character} />
      )}

      {characterLoadingStatus === "failed" && (
        <div className="flex justify-center">
          <ErrorMessage
            title="Error"
            description={
              characterErrorMessage ?? "Failed load character details!"
            }
            classNames="lg:max-w-[75%] xl:max-w-[50%]"
            actionButtonSlot={
              <Button as={Link} to="/characters" variant={"ghost"}>
                Return to all characters
              </Button>
            }
          ></ErrorMessage>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
