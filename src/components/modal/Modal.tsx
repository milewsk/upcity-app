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
  isFunctionDefined: boolean;
  confirmFunction: () => any;
}

//basicly we will use modal only for confirming or

const Modal = ({
  title,
  message,
  type,
  isFunctionDefined,
  confirmFunction,
}: IModalProps) => {
  const onConfirmHandler = () => {
    confirmFunction();
  };

  return (
    <>
      <div className="modal">
        <div className="modal__icon">
          {type === ModalType.Possitive ? (
            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
          )}
        </div>
        <p className="modal__title">{title}</p>
        <p className="modal__message">{message}</p>
        <div className="modal__button-container">
          <button
            className="btn btn--modal btn--dismiss"
            onClick={ModalService.closeModal}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
          {isFunctionDefined && (
            <button
              className="btn  btn--modal btn--confirm"
              onClick={onConfirmHandler}
            >
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
          )}
        </div>
      </div>
      <div
        className="modal__background"
        onClick={ModalService.closeModal}
      ></div>
    </>
  );
};

export default Modal;
