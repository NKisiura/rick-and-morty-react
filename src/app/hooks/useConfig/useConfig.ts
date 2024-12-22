import { useContext } from "react";
import { ConfigContext } from "@app/context/Config";

export const useConfig = () => useContext(ConfigContext);
