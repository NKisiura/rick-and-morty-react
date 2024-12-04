import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppLayout } from "@ui/AppLayout";
import { AppPageLoader } from "@ui/AppPageLoader";
import { Home } from "@pages/Home";
import { UnknownRoute } from "@pages/UnknownRoute";

const Characters = lazy(() => import("@pages/Characters/Characters.tsx"));
const CharacterDetails = lazy(
  () => import("@pages/CharacterDetails/CharacterDetails.tsx"),
);
const Locations = lazy(() => import("@pages/Locations/Locations.tsx"));
const LocationDetails = lazy(
  () => import("@pages/LocationDetails/LocationDetails.tsx"),
);

export const App = () => {
  return (
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
  );
};
