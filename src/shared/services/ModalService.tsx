import ReactDOM from "react-dom";
import Modal from "../../components/modal/Modal";
import ModalSmall from "../../components/modal/ModalSmall";
import { ModalType } from "../Enums";

interface ModalProps {
  title: string;
  message: string;
  type: ModalType;
  isFunctionDefined: boolean;
  confirmFunction: (event: React.MouseEvent) => void;
}

export const ModalService = {
  createModal: ({
    title,
    message,
    type,
    isFunctionDefined,
    confirmFunction,
  }: ModalProps) => {
    const divPortal = document.getElementById("modal-container") as HTMLElement;
    divPortal.classList.remove("hidden");
  },
  createSmallModal: (props: ModalProps) => {
    const divPortal = document.getElementById("modal-container") as HTMLElement;
    ReactDOM.createPortal(
      <ModalSmall
        title={props.title}
        message={props.message}
        type={props.type}
      ></ModalSmall>,
      divPortal
    );
  },
  closeModal: () => {
    const divPortal = document.getElementById("modal-container") as HTMLElement;
  },
};
