import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import ModalProps from "./interfaces";
import styles from "./modal.module.scss";
import Button from "../button/button";

const Modal = (props: ModalProps): JSX.Element | null => {
  const { show, closeModal, title, children, footer = undefined } = props;

  if (!show) {
    return null;
  }
  return (
    <div className={styles.bodyOverlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.header}>
          {title && <h2>{title}</h2>}
          <Button variant={"icon"} onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
