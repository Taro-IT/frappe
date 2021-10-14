import React, { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
  readonly type?: 'button' | 'submit' | 'reset';
  readonly onClick?: MouseEventHandler;
  readonly title: string;
  readonly variant?: 'purple' | 'cta';
  readonly className?: string;
};

export const Button: FC<ButtonProps> = ({ type, onClick, title, variant = 'purple', className }: ButtonProps) => (
  <button className={clsx(styles.btn, styles[variant], className)} type={`${type ? type : 'button'}`} onClick={onClick}>
    {title}
  </button>
);
