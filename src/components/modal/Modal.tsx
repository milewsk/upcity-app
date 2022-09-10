import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../../shared/Enums";
import { ModalService } from "../../shared/services/ModalService";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { closeModal } from "../../store/modalSilce";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

interface IModalProps {
  title: string;
  message: string;
  type: ModalType;
  isFunctionDefined: boolean;
  confirmFunction?: () => void;
}

//basicly we will use modal only for confirming or showing errors

const Modal = () => {
  const divPortal = document.getElementById("modal-space") as HTMLElement;
  const isOpen = useAppSelector((state) => state.modalSlice.isOpen);
  const properties = useAppSelector((state) => state.modalSlice.Properties);
  const dispatch = useAppDispatch();

  if (!isOpen) {
    divPortal.classList.add("hidden");
  }

  const onCloseHandler = (event: React.MouseEvent) => {
    dispatch(closeModal());
  };

  const onConfirmHandler = (event: React.MouseEvent) => {
    if (properties.confirmFunction) {
      properties.confirmFunction();
    }
  };

  return ReactDOM.createPortal(
    <Fragment>
      <div className="modal">
        <div className="modal__icon">
          {properties.type === ModalType.Possitive ? (
            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
          )}
        </div>
        <p className="modal__title">{properties.title}</p>
        <p className="modal__message">{properties.message}</p>
        <div className="modal__button-container">
          <button
            className="btn btn--modal btn--dismiss"
            onClick={onCloseHandler}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
          {properties.isFunctionDefined && (
            <button
              className="btn  btn--modal btn--confirm"
              onClick={onConfirmHandler}
            >
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
          )}
        </div>
      </div>
      <div className="modal__background" onClick={onCloseHandler}></div>
    </Fragment>,
    document.getElementById("modal-space") as HTMLElement
  );
};

export default Modal;
