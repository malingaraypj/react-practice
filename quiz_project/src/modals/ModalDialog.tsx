import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalDialog: React.FC<{ children: ReactNode; open: boolean }> = ({
  children,
  open,
}) => {
  const d_ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = d_ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return;

  return createPortal(<dialog ref={d_ref}>{children}</dialog>, modalRoot);
};

export default ModalDialog;
