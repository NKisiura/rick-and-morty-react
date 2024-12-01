import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "@pages/app-layout";
import { HomePage } from "@pages/home";

export const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "characters",
            children: [
              {
                index: true,
                lazy: () => import("@pages/characters"),
              },
              {
                path: ":id",
                lazy: () => import("@pages/character-details"),
              },
            ],
          },
          {
            path: "locations",
            children: [
              {
                index: true,
                lazy: () => import("@pages/locations"),
              },
              {
                path: ":id",
                lazy: () => import("@pages/location-details"),
              },
            ],
          },
          {
            path: "*",
            lazy: () => import("@pages/not-found"),
          },
        ],
      },
    ],
    { basename: import.meta.env.BASE_URL },
  );

  return <RouterProvider router={router} />;
};
