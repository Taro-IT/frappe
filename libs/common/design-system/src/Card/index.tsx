import classes from './Card.module.scss'
import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import {CardHeader} from "./Header";

type CardProps = {
  readonly className?: string;
  readonly rounded?: boolean;
}

const Card = ({className, children }: PropsWithChildren<CardProps>) => (
  <div className={clsx(classes.card, className)}>
    {children}
  </div>
)

Card.Header = CardHeader

export default Card
