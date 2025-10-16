import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const ModalDialog: React.FC<{
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}> = ({ children, open, onClose, ...props }) => {
  const d_ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = d_ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }
  }, [open]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = d_ref.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      onClose();
    }
  };

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  if (!open) return null;

  return createPortal(
    <dialog
      {...props}
      ref={d_ref}
      onMouseDown={handleMouseDown}
      className={classes.modal}
    >
      {children}
      <form method="dialog">
        <button
          type="button"
          onClick={() => {
            d_ref.current?.close();
            onClose?.();
          }}
        >
          Close
        </button>
      </form>
    </dialog>,
    modalRoot
  );
};

export default ModalDialog;
