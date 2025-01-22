import React, { FC, InputHTMLAttributes } from "react";
import style from './CustomInput.module.scss';

type TCusttomInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const CustomInput: FC<TCusttomInput> = (props) => {
  const { className, ...filtredProps } = props;
  return <input {...filtredProps} type={'text'} className={style.input + " " + className} />;
};