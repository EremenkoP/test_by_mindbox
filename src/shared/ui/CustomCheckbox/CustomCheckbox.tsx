import { FC } from "react";
import style from "./CustomCheckbox.module.scss";
import DoneIcon from "@mui/icons-material/Done";

interface ICustomCheckBox {
  isCheckend: boolean;
  setIsChekend: CallableFunction;
}

export const CustomCheckbox: FC<ICustomCheckBox> = ({
  isCheckend,
  setIsChekend,
}) => {
  return (
    <label className={style.label}>
      <input
        type="checkbox"
        checked={isCheckend}
        onChange={() => setIsChekend()}
        className={style.input}
      />
      <div className={style.psevdoInput}>
        {isCheckend && <DoneIcon color='success'/>}
      </div>
    </label>
  );
};
