import { useState, type ReactNode } from "react";
import { ModalContext, type ModalContextType } from "./modalContext";

const ModalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeModal, setActiveModal] = useState<string>("");

  console.log(activeModal);
  const contextValue: ModalContextType = {
    activeModal,
    openModal: (val: string) => setActiveModal(val),
    closeModal: () => setActiveModal(""),
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
