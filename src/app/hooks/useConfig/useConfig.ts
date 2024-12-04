import { useContext } from "react";
import { ConfigContext } from "@context/Config";

export const useConfig = () => useContext(ConfigContext);
