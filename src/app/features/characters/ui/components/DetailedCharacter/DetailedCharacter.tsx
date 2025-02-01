import characterFallbackImageUrl from "@assets/character-card-fallback.jpeg";

import { useCallback } from "react";
import { Link } from "react-router";
import { Card, CardBody, Image, Skeleton } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Character } from "@features/characters/model";
import { CharacterProperty } from "@features/characters/ui/components";

interface DetailedCharacterProps {
  character: Character;
}

export const DetailedCharacter = ({ character }: DetailedCharacterProps) => {
  const {
    image,
    name,
    status,
    type,
    species,
    gender,
    episodeIds,
    origin,
    location,
  } = character;

  const getEpisodesAmountString = useCallback((episodeIds: number[]) => {
    const count = episodeIds.length;
    return `${count.toString()} ${count > 1 ? "episodes" : "episode"}`;
  }, []);

  return (
    <Card className="w-full">
      <CardBody className="items-center gap-3 lg:flex-row lg:items-start">
        <Image
          src={image ?? characterFallbackImageUrl}
          width={300}
          height={300}
          radius="sm"
          className="aspect-square !h-auto"
          classNames={{ wrapper: "md:!w-full" }}
          alt={`${name} image`}
        />
        <div className="flex w-full flex-col items-center gap-3 lg:items-start">
          <p className="text-3xl font-semibold">{name}</p>
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {status && (
              <CharacterProperty name={"status"}>{status}</CharacterProperty>
            )}
            {type && (
              <CharacterProperty name={"type"}>{type}</CharacterProperty>
            )}
            {species && (
              <CharacterProperty name={"species"}>{species}</CharacterProperty>
            )}
            {gender && (
              <CharacterProperty name={"gender"}>{gender}</CharacterProperty>
            )}
            {episodeIds && (
              <CharacterProperty name={"episodes amount"}>
                {getEpisodesAmountString(episodeIds)}
              </CharacterProperty>
            )}
            {origin?.id && (
              <CharacterProperty name={"origin location"}>
                <Link
                  className="underline underline-offset-2 transition-colors hover:text-foreground/80"
                  to={`/location/${origin.id.toString()}`}
                >
                  <FontAwesomeIcon icon={faLink} /> {origin.name}
                </Link>
              </CharacterProperty>
            )}
            {location?.id && (
              <CharacterProperty name={"last location"}>
                <Link
                  className="underline underline-offset-2 transition-colors hover:text-foreground/80"
                  to={`/location/${location.id.toString()}`}
                >
                  <FontAwesomeIcon icon={faLink} /> {location.name}
                </Link>
              </CharacterProperty>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const DetailedCharacterSkeleton = () => {
  return (
    <Card className="w-full">
      <CardBody className="items-center gap-3 lg:flex-row lg:items-start">
        <div className="aspect-square w-full max-w-[300px]">
          <Skeleton className="h-full w-full rounded-lg"></Skeleton>
        </div>
        <div className="flex w-full flex-col items-center gap-3 lg:items-start">
          <Skeleton className="h-9 w-3/4 max-w-[300px] rounded-lg"></Skeleton>
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <CharacterProperty.Skeleton key={index} />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

DetailedCharacter.Skeleton = DetailedCharacterSkeleton;
