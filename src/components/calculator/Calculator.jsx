import { useId, useMemo, useState } from "react";
import useInput from "./useInput";
import ResultDisplay from "./ResultDisplay";
import style from "./styles/Calculator.module.scss";
function Calculator() {
  const [counter, setCounter] = useState(0);
  const firstInputId = useId();
  const secondInputId = useId();
  const firstInput = useInput("");
  const secondInput = useInput("");
  const result = useMemo(() => {
    return firstInput.value + secondInput.value;
  }, [firstInput.value, secondInput.value]);
  console.log("-----------Calculator has rendered-----------");
  return (
    <section className={style.calculator}>
      <div className={style["calculator__container"]}>
        <div className={style["calculator__content"]}>
          <div className={style["calculator__field"]}>
            <div className={style["field-calculator"]}>
              <label htmlFor={firstInputId}>Type your value</label>
              <input type="number" id={firstInputId} value={firstInput.value} onChange={firstInput.onChange} />
            </div>
            <div className={style["field-calculator"]}>
              <label htmlFor={secondInputId}>Type your value</label>
              <input type="number" id={secondInputId} value={secondInput.value} onChange={secondInput.onChange} />
            </div>
          </div>
          <div className={style["calculator__result"]}>
            <ResultDisplay result={result} />
          </div>
          <div className={style["calculator__counter"]}>
            <p>{counter}</p>
            <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
