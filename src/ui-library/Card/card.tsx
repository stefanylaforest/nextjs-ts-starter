import React from 'react';

import CardProps from './interfaces';
import styles from './card.module.scss';

const Card = (props: CardProps) => {
  const { header, body, footer } = props;
  return (
    <div className={styles.cardWrapper}>
      {header && <div className={styles.cardHeader}>{header}</div>}
      {body && <div className={styles.cardBody}>{body}</div>}
      {footer && <div className={styles.cardFooter}>{footer}</div>}
    </div>
  );
};

export default Card;
