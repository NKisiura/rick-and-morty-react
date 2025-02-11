import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppContainer } from "@ui/AppContainer";
import { AppLayout } from "@ui/AppLayout";
import { AppPageLoader } from "@ui/AppPageLoader";
import { Home } from "@pages/Home";
import { UnknownRoute } from "@pages/UnknownRoute";

const Characters = lazy(
  () => import("@features/characters/ui/pages/Characters/Characters.tsx"),
);
const CharacterDetails = lazy(
  () =>
    import(
      "@features/characters/ui/pages/CharacterDetails/CharacterDetails.tsx"
    ),
);
const Episodes = lazy(
  () => import("@features/episodes/ui/pages/Episodes/Episodes.tsx"),
);
const EpisodeDetails = lazy(
  () => import("@features/episodes/ui/pages/EpisodeDetails/EpisodeDetails.tsx"),
);
const Locations = lazy(
  () => import("@features/locations/ui/pages/Locations/Locations.tsx"),
);
const LocationDetails = lazy(
  () =>
    import("@features/locations/ui/pages/LocationDetails/LocationDetails.tsx"),
);

export const App = () => {
  return (
    <AppContainer>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="home" />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="characters">
            <Route
              index
              element={
                <Suspense key="characters" fallback={<AppPageLoader />}>
                  <Characters />
                </Suspense>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <Suspense key="character-details" fallback={<AppPageLoader />}>
                  <CharacterDetails />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route path="episodes">
            <Route
              index
              element={
                <Suspense key="episodes" fallback={<AppPageLoader />}>
                  <Episodes />
                </Suspense>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <Suspense key="episode-details" fallback={<AppPageLoader />}>
                  <EpisodeDetails />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route path="locations">
            <Route
              index
              element={
                <Suspense key="locations" fallback={<AppPageLoader />}>
                  <Locations />
                </Suspense>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <Suspense key="location-details" fallback={<AppPageLoader />}>
                  <LocationDetails />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route path="*" element={<UnknownRoute />}></Route>
        </Routes>
      </AppLayout>
    </AppContainer>
  );
};
