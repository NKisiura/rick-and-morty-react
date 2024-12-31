import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export const CharacterSkeletonCard = () => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <Skeleton className="h-7 w-3/4 rounded-lg"></Skeleton>
      </CardHeader>
      <CardBody>
        <Skeleton className="h-[300px] max-h-full w-full rounded-lg sm:h-[272px] md:h-[336px] lg:h-[296px] xl:h-[276px] 2xl:h-[264px]"></Skeleton>
      </CardBody>
    </Card>
  );
};
