import { useContext } from "react";
import { ServicesContext } from "@app/context/Services";

export const useServices = () => useContext(ServicesContext);
