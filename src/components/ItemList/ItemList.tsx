import React, { FC, ReactNode } from "react";
import style from './ItemList.module.scss'

interface IItemList {
  children: ReactNode;
  prevChild: ReactNode;
}

export const ItemList: FC<IItemList> = ({prevChild, children}) => {
  return (
    <div className={style.div}>
      {prevChild}
      {children}
    </div>
  );
};