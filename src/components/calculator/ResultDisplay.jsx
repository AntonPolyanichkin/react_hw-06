import style from "./styles/ResultDisplay.module.scss";
import { memo } from "react";
function ResultDisplay({ result }) {
  console.log("-----------ResultDisplay has rendered-----------");
  return (
    <div className={style.result}>
      <p>{result}</p>
    </div>
  );
}

export default memo(ResultDisplay);
