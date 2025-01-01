import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export const CharacterSkeletonCard = () => {
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
