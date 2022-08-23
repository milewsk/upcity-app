import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { PopupType } from "../../shared/Enums";
interface IPopupSmallProps {
  title: string;
  message: string;
  type: PopupType;
}

const Modal = ({ title, message, type }: IPopupSmallProps) => {
  return (
    <div className="modal__container">
      {type === PopupType.Possitive ? (
        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
      )}
      <p>{message}</p>
      <button onClick={}>
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Modal;
