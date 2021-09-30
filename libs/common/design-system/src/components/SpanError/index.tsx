import React from "react";

import styles from './SpanError.module.scss';

type SpanErrorProps = {
  readonly message: string;
}

export const SpanError = ({ message }: SpanErrorProps) => <span className={ styles.span__error } > { message } </span>
