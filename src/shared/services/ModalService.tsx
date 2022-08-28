import ReactDOM from "react-dom";
import Modal from "../../components/modal/Modal";
import ModalSmall from "../../components/modal/ModalSmall";
import { ModalType } from "../Enums";

interface ModalProps {
  title: string;
  message: string;
  type: ModalType;
  confirmFunction?: Function;
}

const divPortal = document.getElementById("portal") as HTMLElement;

export const ModalService = {
  createModal: ({ title, message, type, confirmFunction }: ModalProps) => {
    ReactDOM.createPortal(
      <Modal
        title={title}
        message={message}
        type={type}
        confirmFunction={confirmFunction ? confirmFunction() : () => {}}
      ></Modal>,
      divPortal
    );
  },
  createSmallModal: (props: ModalProps) => {
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
    setTimeout(() => {
      divPortal.innerHTML = "";
    }, 300);
  },
};