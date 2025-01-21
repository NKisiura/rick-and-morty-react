import { useNavigate } from "react-router";
import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export const UnknownRoute = () => {
  const navigate = useNavigate();

  const handleBackToHomeClick = () => {
    void navigate("/home");
  };

  return (
    <div className="container py-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-2xl">Oops... Page not found</p>
        <Button
          color="success"
          variant="ghost"
          startContent={<FontAwesomeIcon icon={faArrowLeftLong} />}
          onClick={handleBackToHomeClick}
        >
          Back to Home page
        </Button>
      </div>
    </div>
  );
};
