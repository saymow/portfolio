"use client";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { useCallback, useEffect } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = (props) => {
  const { children, isOpen, onClose } = props;

  const handleKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  useEffect(() => {
    if (isOpen) document.querySelector("body")!.style.overflow = "hidden";
    else document.querySelector("body")!.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal_container}>
      <div className={styles.modal_backdrop} onClick={onClose}></div>
      <main className={styles.modal_main}>
        <CloseOutline
          onClick={onClose}
          className={styles.modal_close_btn}
          width="2rem"
          height="2rem"
        />
        {children}
      </main>
    </div>,
    document.body
  );
};

export default Modal;
