import { FC } from "react";
import style from './CustomRadiobox.module.scss';

interface ICustomRadiBox {
  value: string;
  name: string;
  onChange: (name: string) => void;
  isChecked?: boolean;
}

export const CustomRadiobox: FC<ICustomRadiBox> =({
  name,
  value,
  onChange,
  isChecked = false,
}) => {
  return (
    <label className={style.label}>
      <input
        name={name}
        value={value}
        type="radio"
        checked={isChecked}
        onChange={() => onChange(name)}
        className={style.input}
      />
      <p className={style.psevdoInput}>{name}</p>
    </label>
  );
};