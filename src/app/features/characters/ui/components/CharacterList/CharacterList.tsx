import { ReactNode } from "react";

interface CharacterListProps {
  children: ReactNode;
}

export const CharacterList = ({ children }: CharacterListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {children}
    </div>
  );
};
