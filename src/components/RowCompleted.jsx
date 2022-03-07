import React from "react";
import Box from "./Box";
import styles from './row.module.css';

export default function RowCompleted({operation,solution}){
    function checkOperation(letter,pos){
        if(solution.includes(letter)){
            if(solution[pos] == letter){
                return "correct";
            }else{
                return "present";
            }
        }
        else{
            return "absent";
        }
    }
    
    return( 
    <div className={styles.row}>
        {
            Array.from(Array(8)).map((_,i)=>(
            <Box 
            key={i} 
            value={operation[i]} 
            status={checkOperation(operation[i],i)}
            />
            ))
        }
    </div>)
}