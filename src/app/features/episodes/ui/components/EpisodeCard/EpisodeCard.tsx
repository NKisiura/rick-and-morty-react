import { Card, CardBody, CardHeader, Divider, Skeleton } from "@heroui/react";
import { Episode } from "@features/episodes/model";

interface EpisodeCardProps {
  episode: Episode;
  isHoverable: boolean;
}

export const EpisodeCard = ({ episode, isHoverable }: EpisodeCardProps) => {
  const { name, episode: episodeSequence } = episode;

  return (
    <Card isHoverable={isHoverable} className="h-full">
      <CardHeader className="justify-center">{episodeSequence}</CardHeader>
      <Divider />
      <CardBody className="items-center">
        <p className="text-center text-xl font-semibold">{name}</p>
      </CardBody>
    </Card>
  );
};

const EpisodeCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="justify-center">
        <Skeleton className="h-6 w-1/3 max-w-[80px] rounded-lg" />
      </CardHeader>
      <Divider />
      <CardBody className="items-center">
        <Skeleton className="h-7 w-4/5 max-w-[250px] rounded-lg" />
      </CardBody>
    </Card>
  );
};

EpisodeCard.Skeleton = EpisodeCardSkeleton;
