import React from "react";
import Box from "./Box";
import styles from './row.module.css';

export default function RowEmpty(){
    return <div className={styles.row}>
        {Array.from(Array(8)).map((_,i)=>(
            <Box key ={i} value="" status="empty"/>
        ))}
    </div>
}