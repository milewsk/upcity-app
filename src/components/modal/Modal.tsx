import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../../shared/Enums";
import { ModalService } from "../../shared/services/ModalService";
interface IModalProps {
  title: string;
  message: string;
  type: ModalType;
  confirmFunction: Function;
}

//ewenualnie pomyśleć jak zrobić to lepiej

const Modal = ({ title, message, type, confirmFunction }: IModalProps) => {
  return (
    <div className="modal__container">
      {type === ModalType.Possitive ? (
        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
      )}
      <p className="modal__title">{title}</p>
      <p className="modal__message">{message}</p>
      <div className="modal__button-container">
        <button
          className="btn modal__btn--cancel"
          onClick={ModalService.closeModal}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        {confirmFunction && (
          <button
            className="btn modal__btn--cancel"
            onClick={confirmFunction()}
          >
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
