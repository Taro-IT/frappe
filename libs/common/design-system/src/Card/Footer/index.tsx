import React, { FC } from 'react';
import styles from './CardFooter.module.scss';

export const CardFooter: FC = ({ children }) => <div className={styles.card__footer}>{children}</div>;
