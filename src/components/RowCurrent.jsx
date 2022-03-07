import React from "react";
import Box from "./Box";
import styles from './row.module.css';

export default function RowCurrent({operation}){
    return (
        <div className={styles.row}>
            {operation.split('').map((letter,i)=>(
                <Box key={i} value={letter} status="edit"/>
            ))}
            {Array.from(Array(8-operation.length)).map((letter,i)=>(
                <Box key={i} value={""} status ="edit"/>
            ))}
        </div>
    )
}