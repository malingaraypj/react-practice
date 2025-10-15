import { createContext } from "react";

export type ModalContextType = {
  activeModal: string;
  openModal: (val: string) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  activeModal: "",
  openModal: () => {},
  closeModal: () => {},
});
