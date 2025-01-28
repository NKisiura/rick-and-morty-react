import { useTheme } from "@heroui/use-theme";
import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="bordered"
      radius="full"
      aria-label="Toggle theme"
      className="border-1"
      onPress={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <FontAwesomeIcon size="lg" icon={theme === "dark" ? faSun : faMoon} />
    </Button>
  );
};
