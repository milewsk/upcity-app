import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../../shared/Enums";
interface IModalProps {
  title: string;
  message: string;
  type: ModalType;
}

const Modal = ({ title, message, type }: IModalProps) => {
  return (
    <div className="modal__container">
      {type === ModalType.Possitive ? (
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
