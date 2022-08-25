import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ReactDOM from "react-dom";
import Cookies from "universal-cookie";
import Modal from "../components/modal/Modal";
import ModalSmall from "../components/modal/ModalSmall";
import { ModalType } from "../shared/Enums";

interface IModalState {
  isOpen: boolean;
}

interface ModalPayload {
  title: string;
  message: string;
  type: ModalType;
}

const initialState: IModalState = {
  isOpen: false,
};

const divPortal = document.getElementById("portal") as HTMLElement;

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    createModal: (state, payload: PayloadAction<ModalPayload>) => {
      if (state.isOpen === true) {
        divPortal.remove();
      }
      state.isOpen = true;

      ReactDOM.createPortal(
        <Modal
          title={payload.payload.title}
          message={payload.payload.message}
          type={payload.payload.type}
        ></Modal>,
        divPortal
      );
    },
    createSmallModal: (state, payload: PayloadAction<ModalPayload>) => {
      if (state.isOpen === true) {
        divPortal.remove();
      }
      state.isOpen = true;

      ReactDOM.createPortal(
        <ModalSmall
          title={payload.payload.title}
          message={payload.payload.message}
          type={payload.payload.type}
        ></ModalSmall>,
        divPortal
      );
    },
    closeModal: (state, payload: PayloadAction<ModalPayload>) => {
      state.isOpen = false;
      divPortal.remove();
    },
  },
});

export const { createModal, createSmallModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
