import React from "react";

import styles from "./card.module.scss";

interface CardProps {
  header?: string | React.ReactNode;
  body?: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

const Card = (props: CardProps) => {
  const { header = "", body = "", footer = "" } = props;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>{header}</div>
      <div className={styles.cardBody}>{body}</div>
      <div className={styles.cardFooter}>{footer}</div>
    </div>
  );
};

export default Card;
