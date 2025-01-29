import { useCallback, useEffect, useState } from "react";
import { Input, Select, SelectItem, SharedSelection } from "@heroui/react";
import {
  CharacterFilter,
  CharacterGender,
  CharacterStatus,
} from "@features/characters/model";

interface CharactersFilterProps {
  filter: CharacterFilter;
  onFilterChange: (filter: CharacterFilter) => void;
}

const statuses: CharacterStatus[] = ["Alive", "Dead", "unknown"];
const genders: CharacterGender[] = ["Male", "Female", "Genderless", "unknown"];

export const CharactersFilter = ({
  filter,
  onFilterChange,
}: CharactersFilterProps) => {
  const [localFilter, setLocalFilter] = useState<CharacterFilter>(filter);

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const patchFilter = useCallback(
    (key: keyof CharacterFilter, value: string | null) => {
      const nextFilter: CharacterFilter = { ...localFilter, [key]: value };

      setLocalFilter(nextFilter);
      onFilterChange(nextFilter);
    },
    [localFilter, onFilterChange],
  );

  const handleInputChange = useCallback(
    (
      key: keyof Pick<CharacterFilter, "name" | "type" | "species">,
      value: string,
    ) => {
      patchFilter(key, value);
    },
    [patchFilter],
  );

  const handleSelectChange = useCallback(
    (
      key: keyof Pick<CharacterFilter, "status" | "gender">,
      selection: SharedSelection,
    ) => {
      const [value] = [...selection];
      patchFilter(key, (value as string | undefined) ?? null);
    },
    [patchFilter],
  );

  return (
    <form className="grid w-full grid-cols-1 gap-2 rounded-xl border border-default-200 p-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:p-3">
      <Input
        type="text"
        label="Name"
        isClearable
        size="sm"
        value={localFilter.name ?? ""}
        onValueChange={(value) => {
          handleInputChange("name", value);
        }}
      />
      <Input
        type="text"
        label="Type"
        isClearable
        size="sm"
        value={localFilter.type ?? ""}
        onValueChange={(value) => {
          handleInputChange("type", value);
        }}
      />
      <Input
        type="text"
        label="Species"
        isClearable
        size="sm"
        value={localFilter.species ?? ""}
        onValueChange={(value) => {
          handleInputChange("species", value);
        }}
      />
      <Select
        label="Status"
        size="sm"
        classNames={{
          value: "capitalize",
          listbox: "capitalize",
        }}
        selectedKeys={[localFilter.status ?? ""]}
        onSelectionChange={(selection) => {
          handleSelectChange("status", selection);
        }}
      >
        {statuses.map((status) => (
          <SelectItem key={status}>{status}</SelectItem>
        ))}
      </Select>
      <Select
        label="Gender"
        size="sm"
        classNames={{
          value: "capitalize",
          listbox: "capitalize",
        }}
        selectedKeys={[localFilter.gender ?? ""]}
        onSelectionChange={(selection) => {
          handleSelectChange("gender", selection);
        }}
      >
        {genders.map((gender) => (
          <SelectItem key={gender}>{gender}</SelectItem>
        ))}
      </Select>
    </form>
  );
};
