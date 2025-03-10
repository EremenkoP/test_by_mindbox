import {
  CustomButton,
  CustomCheckbox,
  CustomInput,
  CustomRadiobox,
  OneItemList,
  RadioButtonEnum,
} from "@shared/index";
import style from "./App.module.scss";
import "./normalize.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 as uuid } from "uuid";
import { SyntheticEvent, useMemo, useState } from "react";

const App = () => {
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

  const RadioButtonName = "Filtred";

  const changeFilter = (name: string) => {
    setFilter(name);
  };

  const cleareCompleted = () => {
    const newArray = list.filter((item) => !item.isComplited);
    setList(newArray);
  };

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
  }, [filter, list]);

  const changeOneElement = (id: string) => {
    const index = list.findIndex((item) => item.id === id);
    if (index !== -1) {
      list[index].isComplited = !list[index].isComplited;
      setList([...list]);
    }
  };


  return (
    <div className={style.app}>
      <section className={style.app}>
        <h1 className={style.title}>todos</h1>
        <article className={style.article}>
          <div className={style.infoLine}>
            <ExpandMoreIcon />
            <CustomInput
              onBlur={(event) => addNewItem(event)}
              placeholder="What needs to be done?"
            />
          </div>
          <ul className={style.ul}>
            {filterList.map((el) => {
              return (
                <li key={el.id} className={style.ul__li}>
                  <div className={style.infoLine}>
                    <CustomCheckbox
                      isCheckend={el.isComplited}
                      setIsChekend={() => changeOneElement(el.id)}
                    />
                    <p
                      className={
                        style.text +
                        " " +
                        (el.isComplited ? style.text_completed : "")
                      }
                    >
                      {el.name}
                    </p>
                  </div>
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
      </section>
    </div>
  );
}

export default App;
