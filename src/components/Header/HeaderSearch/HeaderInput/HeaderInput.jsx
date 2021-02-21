import { Field } from "formik";
import React from "react";
import style from "./HeaderInput.module.css";

const HeaderInput = (props) => {
    return <div class={style.box}>
        <div class={style.inputСontainer}>
            <div className={style.leftShadow}></div>
            <div className={style.rightShadow}></div>
            <Field type="text" required="" id={props.id} name={props.name}/>
            <label>Поиск</label>
        </div>
    </div>
}

export default HeaderInput