import { EpisodeCard, EpisodeList } from "@features/episodes/ui/components";

export const Episodes = () => {
  return (
    <div className="container py-4">
      <EpisodeList>
        {Array.from({ length: 20 }).map((_, index) => (
          <EpisodeCard.Skeleton key={index}></EpisodeCard.Skeleton>
        ))}
      </EpisodeList>
    </div>
  );
};

export default Episodes;
