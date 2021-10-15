import classes from './Card.module.scss';
import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { CardHeader } from './Header';
import { CardFooter } from './Footer';

type CardProps = {
  readonly className?: string;
  readonly rounded?: boolean;
};

const Card = ({ className, children, rounded = true }: PropsWithChildren<CardProps>) => (
  <div className={clsx(classes.card, rounded && classes.rounded, className)}>{children}</div>
);

Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;
