import { FC, MouseEventHandler } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset" ,
  onClick: MouseEventHandler,
  title: string
}

export const Button: FC<ButtonProps> = ({ type, onClick, title, ...props}: ButtonProps) => {
  return(
    <button
      className="bg-purple-500 text-white hover:bg-blue-400 font-sans p-2"
      type={`${type ? type: "button"}`}
      onClick={onClick}
    >
        {title}
    </button>
  );
}
