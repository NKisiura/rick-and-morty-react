import { Link } from "react-router";
import { Alert, Button, Pagination } from "@nextui-org/react";
import { useCharacters } from "@features/characters/hooks/useCharacters";
import {
  CharacterCard,
  CharacterList,
} from "@features/characters/ui/components";

export const Characters = () => {
  const {
    filter,
    characters,
    loadingStatus,
    errorMessage,
    paginationInfo,
    handleFilterChange,
    handleRetry,
  } = useCharacters();

  const showPagination =
    (loadingStatus === "pending" || loadingStatus === "succeeded") &&
    !!paginationInfo;

  return (
    <div className="container py-4">
      <div className="flex flex-col items-center gap-4">
        {loadingStatus === "pending" && (
          <CharacterList>
            {Array.from({ length: 20 }).map((_, index) => (
              <CharacterCard.Skeleton key={index}></CharacterCard.Skeleton>
            ))}
          </CharacterList>
        )}

        {loadingStatus === "succeeded" && (
          <CharacterList>
            {characters.map((character) => (
              <Link to={character.id.toString()} key={character.id}>
                <CharacterCard
                  character={character}
                  isHoverable={true}
                ></CharacterCard>
              </Link>
            ))}
          </CharacterList>
        )}

        {showPagination && (
          <Pagination
            page={filter.page ?? 1}
            total={paginationInfo.pages}
            isDisabled={loadingStatus === "pending"}
            showControls
            size="lg"
            classNames={{
              base: "px-0",
              prev: "hidden sm:flex",
              next: "hidden sm:flex",
            }}
            onChange={(page) => {
              handleFilterChange({ ...filter, page });
            }}
          ></Pagination>
        )}

        {loadingStatus === "failed" && (
          <Alert
            title={"Error"}
            description={errorMessage}
            color={"danger"}
            variant={"faded"}
            classNames={{ base: "sm:max-w-[75%] xl:max-w-[50%]" }}
            endContent={
              <Button color={"danger"} onClick={handleRetry}>
                Retry
              </Button>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Characters;
