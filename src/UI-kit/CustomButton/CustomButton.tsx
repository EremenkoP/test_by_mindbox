import React, { ButtonHTMLAttributes, FC } from "react";
import style from "./CustomButton.module.scss";

type TCustomButton = ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton: FC<TCustomButton> = ({ className, value, ...props }) => {
  return (
    <button {...props} value={value} className={style.button + " " + className}>
      {value}
    </button>
  );
};
