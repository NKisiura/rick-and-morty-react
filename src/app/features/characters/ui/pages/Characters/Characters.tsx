import { Alert, Button, Pagination } from "@nextui-org/react";
import { useCharacters } from "@features/characters/hooks/useCharacters";
import {
  CharacterCard,
  CharacterSkeletonCard,
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

  const retryAction = (
    <Button color={"danger"} onClick={handleRetry}>
      Retry
    </Button>
  );

  return (
    <div className="container py-4">
      <div className="flex flex-col items-center gap-4">
        {loadingStatus === "pending" && (
          <CharacterList>
            {Array.from({ length: 20 }).map((_, index) => (
              <CharacterSkeletonCard key={index}></CharacterSkeletonCard>
            ))}
          </CharacterList>
        )}

        {loadingStatus === "succeeded" && (
          <CharacterList>
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
              ></CharacterCard>
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
            endContent={retryAction}
          />
        )}
      </div>
    </div>
  );
};

export default Characters;
