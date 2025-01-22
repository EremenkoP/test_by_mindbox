import React, { FC, SyntheticEvent, useMemo, useState } from "react";
import style from "./OneList.module.scss";
import {
  CustomButton,
  CustomCheckbox,
  CustomInput,
  CustomRadiobox,
} from "../../UI-kit";
import { ItemList } from "../ItemList/ItemList";
import { v4 as uuid } from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const OneList: FC = () => {
  interface OneItemList {
    id: string;
    isComplited: boolean;
    name: string;
  }

  const RadioButtonName = "Filtred";

  enum RadioButtonEnum {
    all = "All",
    active = "Active",
    completed = "Completed",
  }

  const [list, setList] = useState<OneItemList[]>([
    {
      id: uuid(),
      isComplited: true,
      name: "First",
    },
    {
      id: uuid(),
      isComplited: true,
      name: "second",
    },
    {
      id: uuid(),
      isComplited: false,
      name: "Third",
    },
  ]);
  const [filter, setFilter] = useState<string>(RadioButtonEnum.all);

  const addNewItem = (event: SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    const name = input.value;
    if (name.length !== 0) {
      setList(
        list.concat({
          id: uuid(),
          isComplited: false,
          name: name,
        })
      );
      input.value = "";
    }
  };



  const count = useMemo(() => {
    return list.filter((item) => !item.isComplited).length;
  }, [list]);

  const changeFilter = (name: string) => {
    setFilter(name);
  };

  const cleareCompleted = () => {
    const newArray = list.filter((item) => !item.isComplited);
    setList(newArray);
  }

  const filterList = useMemo(() => {
    switch (filter) {
      case RadioButtonEnum.active: {
        return list.filter((item) => !item.isComplited);
      }
      case RadioButtonEnum.completed: {
        return list.filter((item) => item.isComplited);
      }
      default: {
        return list;
      }
    }
  }, [filter, list])

  const changeOneElement = (id: string) => {
    const index = list.findIndex((item) => item.id === id);
    if (index !== -1) {
      list[index].isComplited = !list[index].isComplited;
      setList([...list]);
    }
  };

  return (
    <article className={style.article}>
      <ItemList
        children={
          <CustomInput
            onBlur={(event) => addNewItem(event)}
            placeholder="What needs to be done?"
          />
        }
        prevChild={<ExpandMoreIcon />}
      />
      <ul className={style.ul}>
        {filterList.map((el) => {
          return (
            <li key={el.id} className={style.ul__li}>
              <ItemList
                children={
                  <p
                    className={
                      style.text +
                      " " +
                      (el.isComplited ? style.text_completed : "")
                    }
                  >
                    {el.name}
                  </p>
                }
                prevChild={
                  <CustomCheckbox
                    isCheckend={el.isComplited}
                    setIsChekend={() => changeOneElement(el.id)}
                  />
                }
              />
            </li>
          );
        })}
      </ul>
      <div className={style.footer}>
        <p className={style.text}>{count} items left</p>
        <div className={style.footer__radiobox}>
          <CustomRadiobox
            value={RadioButtonName}
            name={RadioButtonEnum.all}
            isChecked={filter === RadioButtonEnum.all}
            onChange={changeFilter}
          />
          <CustomRadiobox
            value={RadioButtonName}
            name={RadioButtonEnum.active}
            isChecked={filter === RadioButtonEnum.active}
            onChange={changeFilter}
          />
          <CustomRadiobox
            value={RadioButtonName}
            name={RadioButtonEnum.completed}
            isChecked={filter === RadioButtonEnum.completed}
            onChange={changeFilter}
          />
        </div>
        <CustomButton
          value={"Cleare completed"}
          onClick={() => cleareCompleted()}
        />
      </div>
    </article>
  );
};
