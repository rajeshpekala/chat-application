import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? faEyeSlash : faEye}
      onClick={() => {
        setVisible((visible) => !visible);
      }}
      className="cursor-pointer"
    />
  );
  const inputType = visible ? "text" : "password";

  return [inputType, Icon];
};

export default usePasswordToggle;
