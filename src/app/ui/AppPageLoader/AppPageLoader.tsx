import { Spinner } from "@heroui/react";

export const AppPageLoader = () => {
  return (
    <div className="container py-4">
      <div className="flex justify-center">
        <Spinner
          size="lg"
          color="success"
          label="Loading..."
          classNames={{ base: "gap-3", wrapper: "w-14 h-14", label: "text-xl" }}
        />
      </div>
    </div>
  );
};
