import classes from './Card.module.scss'
import { FC, PropsWithChildren } from "react";
type CardProps = {
  readonly className: string
}


const Card: FC<CardProps> = ({className, ...props}: PropsWithChildren<CardProps>)  => {
  return  (
    <div className={`${classes.card} ${className}`}>
      {props.children}
    </div>
  )
}

export default Card