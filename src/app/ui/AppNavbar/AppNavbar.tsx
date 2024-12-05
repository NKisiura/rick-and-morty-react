import { useState } from "react";
import { Link } from "react-router";
import {
  Image,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { NavbarGithubLink, NavbarLink } from "./components";

interface NavLink {
  link: string;
  label: string;
}

const navLinks: NavLink[] = [
  { link: "/characters", label: "Characters" },
  { link: "/episodes", label: "Episodes" },
  { link: "/locations", label: "Locations" },
  { link: "/favourites", label: "Favourites" },
];

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      isBordered
      height="5rem"
      classNames={{ wrapper: "!container", menu: "px-0" }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link to={"/home"} onClick={handleLinkClick}>
            <Image
              src="./logo.svg"
              width={164}
              height={50}
              alt="Rick and Morty logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:flex lg:gap-8 xl:gap-16"
        justify="center"
      >
        {navLinks.map(({ link, label }) => (
          <NavbarItem key={link}>
            <NavbarLink to={link}>{label}</NavbarLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        ></NavbarMenuToggle>
        <NavbarGithubLink className="hidden md:inline-flex" />
      </NavbarContent>
      <NavbarMenu>
        <div className="container">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ link, label }) => (
              <NavbarMenuItem key={link}>
                <NavbarLink to={link} onClick={handleLinkClick}>
                  {label}
                </NavbarLink>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem className="mt-4">
              <NavbarGithubLink onClick={handleLinkClick} />
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
