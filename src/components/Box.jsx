import React from "react";
import styles from './box.module.css';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles);


export default function Box(props){
    const boxStatus = classes({
        correct: props.status === "correct",
        present: props.status === "present",
        absent: props.status === "absent",
        empty: props.status === "empty",
        edit: props.status === "edit",
    });

    const boxStyles = {
        fontSize: "1.8em",
        fontWeight: "bold",
        width: "50px",
        height: "50px",
        color:props.status=="edit"? "black":null,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "3px",
        border: props.value!="" && props.status=="edit"? "solid 2px rgb(80,80,80)":null,
    }
    return <div style={boxStyles} className={boxStatus} >{props.value}</div>
}