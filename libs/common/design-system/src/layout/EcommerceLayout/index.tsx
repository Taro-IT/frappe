import { PropsWithChildren } from 'react';
import styles from './EcommerceLayout.module.scss';

export const EcommerceLayout = ({ children }: PropsWithChildren<unknown>) => (
  <div className={ styles.layout }>
    { children }
  </div>
);

