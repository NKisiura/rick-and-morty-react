import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

interface ErrorMessageProps {
  title: string;
  description: string;
  classNames?: string;
  actionButtonSlot?: ReactNode;
}

export const ErrorMessage = ({
  title,
  description,
  classNames = "",
  actionButtonSlot,
}: ErrorMessageProps) => {
  return (
    <div
      className={twMerge(
        "w-full rounded-medium border-1 border-danger-200 bg-danger-50 p-3 text-danger-600 dark:border-danger-100 dark:bg-danger-50/50 dark:text-danger-500",
        classNames,
      )}
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 min-w-9 items-center justify-center rounded-full border-1 border-danger-100 bg-danger-50 shadow-small dark:bg-danger-100">
            <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div>{actionButtonSlot}</div>
      </div>
    </div>
  );
};
