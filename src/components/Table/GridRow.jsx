import style from "./styles/GridRow.module.scss"
import { memo } from "react";
function GridRow({name,age,city}) {
	return ( 
		<div className={style.row}>
			<p>{name}</p>
			<p>{age}</p>
			<p>{city}</p>
		</div>
	 );
}

export default memo(GridRow);