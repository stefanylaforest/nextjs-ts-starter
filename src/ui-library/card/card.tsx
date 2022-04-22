import React from 'react';

import CardProps from './interfaces';
import styles from './card.module.scss';

const Card = (props: CardProps): JSX.Element => {
  const { header = '', body = '', footer = '' } = props;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>{header}</div>
      <div className={styles.cardBody}>{body}</div>
      <div className={styles.cardFooter}>{footer}</div>
    </div>
  );
};

export default Card;
