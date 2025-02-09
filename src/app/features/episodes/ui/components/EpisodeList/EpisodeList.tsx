import { ReactNode } from "react";

interface EpisodeListProps {
  children: ReactNode;
}

export const EpisodeList = ({ children }: EpisodeListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};
