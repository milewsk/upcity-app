import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "typescript";
import Modal from "../components/modal/Modal";

import { ModalType } from "../shared/Enums";
import { ModalService } from "../shared/services/ModalService";

interface IModalState {
  isOpen: boolean;
  Properties: IModalProps;
}

const initialState: IModalState = {
  isOpen: false,
  Properties: { title: "", message: "", type: 2, isFunctionDefined: false },
};

interface IModalProps {
  title: string;
  message: string;
  type: ModalType;
  isFunctionDefined: boolean;
  confirmFunction?: () => void;
}

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    openModal: (state: IModalState, action: PayloadAction<IModalProps>) => {
      state.isOpen = true;
      state.Properties = action.payload;

      const divPortal = document.getElementById("modal-space") as HTMLElement;
      divPortal.classList.remove("hidden");
    },
    closeModal: (state: IModalState) => {
      const divPortal = document.getElementById("modal-space") as HTMLElement;
      state.isOpen = false;
      divPortal.classList.add("hidden");
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
