import characterFallbackImageUrl from "@assets/character-card-fallback.jpeg";
import { Link } from "react-router";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Character } from "@features/characters/model";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, image } = character;

  return (
    <Link to={id.toString()}>
      <Card isHoverable>
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
    </Link>
  );
};
