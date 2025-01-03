import characterFallbackImageUrl from "@assets/character-card-fallback.jpeg";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Character } from "@features/characters/model";

interface CharacterCardProps {
  character: Character;
  onCardClick: () => void;
}

export const CharacterCard = ({
  character,
  onCardClick,
}: CharacterCardProps) => {
  const { name, image } = character;

  return (
    <Card isHoverable isPressable onClick={onCardClick}>
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
