import classes from './Card.module.scss';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { CardHeader } from './Header';
import { CardFooter } from './Footer';

type CardProps = {
  readonly className?: string;
  readonly rounded?: boolean;
  readonly onClick?:MouseEventHandler<HTMLDivElement>;
};

const Card = ({ className, children, rounded = true , onClick }: PropsWithChildren<CardProps>) => (
  <div className={clsx(classes.card, rounded && classes.rounded, className, onClick && "cursor-pointer")} onClick={onClick}>{children}</div>
);

Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;
