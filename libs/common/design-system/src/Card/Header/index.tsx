import React, {PropsWithChildren} from "react";
import styles from "./CardHeader.module.scss"

type CardHeaderProps = {
  readonly title: string;
}

export const CardHeader = ({ title , children }: PropsWithChildren<CardHeaderProps>) => (
  <div className={styles.card__header} >
    <h1 className={styles.card__header__title}> {title} </h1>
    {children}
  </div>
)
