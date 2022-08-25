import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../../shared/Enums";
import { useEffect } from "react";
interface IModalSmallProps {
  title: string;
  message: string;
  type: ModalType;
}

const ModalSmall = ({ title, message, type }: IModalSmallProps) => {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);

  const closeModalHandler = () => {};

  return (
    <div className="popup-small__container">
      {type === ModalType.Possitive ? (
        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
      )}
      <p>{message}</p>
      <button onClick={closeModalHandler}>
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ModalSmall;
