import React from 'react';
import NextLink from 'next/link';
import styles from './Link.module.scss';
import clsx from 'clsx';

type LinkProps = {
  readonly text: string;
  readonly href: string;
  readonly variant?: 'cta' | 'nav-item' | "nav-item-mobile";
};

export const Link = ({ text, href, variant = 'cta' }: LinkProps) => (

    <a href={href} className={clsx(styles.link, styles[variant])}>
      {' '}
      {text}{' '}
    </a>
);
