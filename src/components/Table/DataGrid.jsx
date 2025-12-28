import style from "./styles/DataGrid.module.scss";
import { usersData } from "./data";
import { useDeferredValue, useId, useMemo, useState } from "react";
import GridRow from "./GridRow";
function DataGrid() {
  const searchInputId = useId();
  const [serchInputValue, setSerchInputValue] = useState("");
  const [usersList, setUsersList] = useState(usersData);
  const defferedInputValue = useDeferredValue(serchInputValue);
  const dataFilteredList = useMemo(() => {
    const value = defferedInputValue.toLowerCase().trim();
    return usersList.filter((user) => {
      const age = Number(user.age);
      if (Number.isFinite(Number(value))) {
        return age === Number(value);
      } else {
        return user.name.toLowerCase().includes(value) || user.city.toLowerCase().includes(value);
      }
    });
  }, [defferedInputValue, usersList]);

  function handleDataSort() {}
  return (
    <section className={style.search}>
      <div className={style["search__container"]}>
        <div className={style["search__content"]}>
          <div className={style["search__input"]}>
            <label htmlFor={searchInputId}>Search a person</label>
            <input type="text" id={searchInputId} value={serchInputValue} onChange={(e) => setSerchInputValue(e.target.value)} />
          </div>
          <div className={style["result-container"]}>
            {dataFilteredList.map((user) => (
              <GridRow key={user.id} {...user} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataGrid;
