import { ReactNode } from "react";
import { Skeleton } from "@heroui/react";

interface CharacterPropertyProps {
  name: string;
  children: ReactNode;
}

export const CharacterProperty = ({
  name,
  children,
}: CharacterPropertyProps) => {
  return (
    <div className="flex flex-col items-start gap-1 rounded-xl border-1 border-default bg-default/50 p-3">
      <span className="text-xs capitalize text-foreground/70">{name}</span>
      <span className="text-lg font-bold capitalize">{children}</span>
    </div>
  );
};

const CharacterPropertySkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-2 rounded-xl border-1 border-default bg-default/50 p-3">
      <Skeleton className="h-4 w-1/4 rounded-lg" />
      <Skeleton className="h-6 w-3/4 rounded-lg" />
    </div>
  );
};

CharacterProperty.Skeleton = CharacterPropertySkeleton;
