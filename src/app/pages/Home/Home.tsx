import charactersCardUrl from "@assets/home-characters-card.webp";
import episodesCardUrl from "@assets/home-episodes-card.webp";
import locationsCardUrl from "@assets/home-locations-card.webp";
import favouritesCardUrl from "@assets/home-favourites-card.webp";
import decorativeCardUrl from "@assets/home-decorative-card.webp";

import { Link } from "react-router";
import { Button, Card, CardFooter, Image } from "@heroui/react";

interface PageCard {
  cardName: string;
  imageUrl: string;
  link: string;
}

const cardList: PageCard[] = [
  {
    cardName: "characters",
    imageUrl: charactersCardUrl,
    link: "/characters",
  },
  {
    cardName: "episodes",
    imageUrl: episodesCardUrl,
    link: "/episodes",
  },
  {
    cardName: "locations",
    imageUrl: locationsCardUrl,
    link: "/locations",
  },
  {
    cardName: "favourites",
    imageUrl: favouritesCardUrl,
    link: "/favourites",
  },
];

export const Home = () => {
  return (
    <div className="container py-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2 hidden lg:flex">
            <Image
              src={decorativeCardUrl}
              width={816}
              height={400}
              className="!h-full max-h-[320px] object-cover xl:max-h-[400px]"
              alt="Rick"
            />
          </Card>
          {cardList.map(({ cardName, imageUrl, link }, index) => (
            <Card isFooterBlurred key={index}>
              <Image
                src={imageUrl}
                width={400}
                height={400}
                className="!h-full object-cover"
                alt="Characters"
              />
              <CardFooter className="absolute bottom-0 z-10 flex justify-between border-t-1 border-default/30 bg-default/40">
                <p className="text-lg font-medium capitalize">{cardName}</p>
                <Button as={Link} to={link} radius="full" color="primary">
                  Go to Page
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
