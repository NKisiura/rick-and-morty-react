import { ReactNode } from "react";
import { NavLink } from "react-router";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useConfig } from "@hooks/useConfig";

const navbarLinkClassName =
  "relative inline-flex before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-success before:content-[''] before:transition-width hover:before:w-full";

interface NavbarLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

export const NavbarLink = ({ to, children, onClick }: NavbarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(navbarLinkClassName, { "before:w-full": isActive })
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

interface NavbarGithubLinkProps {
  className?: string;
  onClick?: () => void;
}

export const NavbarGithubLink = ({
  className: extraClasses,
  onClick,
}: NavbarGithubLinkProps) => {
  const { ghRepoUrl } = useConfig();

  return (
    <a
      className={twMerge(navbarLinkClassName, extraClasses)}
      href={ghRepoUrl}
      target="_blank"
      rel="noreferrer"
      role="link"
      onClick={onClick}
    >
      NKisiura
    </a>
  );
};
