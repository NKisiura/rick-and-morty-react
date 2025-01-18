import { Input, Select, SelectItem, SharedSelection } from "@nextui-org/react";
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
  const handleStatusChange = (selection: SharedSelection) => {
    if (selection instanceof Set) {
      const [value] = [...selection];
      const status = (value as CharacterStatus | undefined) ?? null;

      onFilterChange({ ...filter, status });
    }
  };

  const handleGenderChange = (selection: SharedSelection) => {
    if (selection instanceof Set) {
      const [value] = [...selection];
      const gender = (value as CharacterGender | undefined) ?? null;

      onFilterChange({ ...filter, gender });
    }
  };

  return (
    <form className="grid w-full grid-cols-1 gap-2 rounded-xl border border-default-200 p-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:p-3">
      <Input
        type="text"
        label="Name"
        isClearable
        size="sm"
        value={filter.name ?? ""}
        onValueChange={(value) => {
          onFilterChange({ ...filter, name: value });
        }}
      />
      <Input
        type="text"
        label="Type"
        isClearable
        size="sm"
        value={filter.type ?? ""}
        onValueChange={(value) => {
          onFilterChange({ ...filter, type: value });
        }}
      />
      <Input
        type="text"
        label="Species"
        isClearable
        size="sm"
        value={filter.species ?? ""}
        onValueChange={(value) => {
          onFilterChange({ ...filter, species: value });
        }}
      />
      <Select
        label="Status"
        size="sm"
        classNames={{
          value: "capitalize",
          listbox: "capitalize",
        }}
        selectedKeys={[filter.status ?? ""]}
        onSelectionChange={handleStatusChange}
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
        selectedKeys={[filter.gender ?? ""]}
        onSelectionChange={handleGenderChange}
      >
        {genders.map((gender) => (
          <SelectItem key={gender}>{gender}</SelectItem>
        ))}
      </Select>
    </form>
  );
};
