import characterFallbackImageUrl from "@assets/character-card-fallback.jpeg";
import { Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import { Character } from "@features/characters/model";

interface CharacterCardProps {
  character: Character;
  isHoverable: boolean;
}

const CharacterCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <Skeleton className="h-7 w-3/5 rounded-lg"></Skeleton>
      </CardHeader>
      <CardBody>
        <Skeleton className="rounded-lg">
          <div className="w-[300px] pt-[100%]"></div>
        </Skeleton>
      </CardBody>
    </Card>
  );
};

export const CharacterCard = ({
  character,
  isHoverable,
}: CharacterCardProps) => {
  const { name, image } = character;

  return (
    <Card isHoverable={isHoverable}>
      <CardHeader className="pb-0">
        <p className="text-start text-xl font-semibold">{name}</p>
      </CardHeader>
      <CardBody>
        <Image
          src={image ?? characterFallbackImageUrl}
          width={300}
          height={300}
          className="!h-full rounded-lg"
          alt="character image"
        ></Image>
      </CardBody>
    </Card>
  );
};

CharacterCard.Skeleton = CharacterCardSkeleton;
