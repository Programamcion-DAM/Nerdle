import React,{useEffect, useState} from 'react';
import RowCompleted from './RowCompleted';
import RowCurrent from './RowCurrent';
import RowEmpty from './RowEmpty';
import useWindow from "../hooks/useWindow";
import { getOperationOfTheDay, isValidOperation } from '../service/reques';
import styles from './wordle.module.css';
import KeyBoard from './KeyBoard';

const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
]

export default function Wordle(){
    const [operationOfTheDay, setOperationOfTheDay] = useState("");
    const [turn, setTurn] = useState(1);
    const [currentOperation, setCurrentOperation] = useState("");
    const [completedOperations, setCompletedOperations] = useState([]);
    const [gameStatus,setGameStatus] = useState("Playing");

    useWindow('keydown',handleKeyDown);

    useEffect(()=>{
        setOperationOfTheDay(getOperationOfTheDay());
    },[]);

    function handleKeyDown(e){
        const key = e.key.toUpperCase();

        onKeyPressed(key);
    }

    function onKeyPressed(key){
        if(gameStatus != "Playing"){
            return;
        }

        if(key == 'BACKSPACE' && currentOperation.length > 0){
            onDelete();
            return;
        }
        if(key == 'ENTER' && currentOperation.length==8){
            onEnter();
            return;
        }
        if(currentOperation.length >= 8)return;

        if(keys.includes(key)){
            onInput(key);
            return;
        }
    }

    function onInput(number){
        const newOperation = currentOperation + number;
        setCurrentOperation(newOperation);
    }
    function onDelete(){
        const newOperation = currentOperation.slice(0,-1);
        setCurrentOperation(newOperation);
    }

    function onEnter(){
        
        if(!isValidOperation(currentOperation)){
            alert("No es una operacion valida");
            return;
        }
        
        if(currentOperation==operationOfTheDay){
            setCompletedOperations([...completedOperations,currentOperation]);
            setGameStatus("Won");
            return;
        }
        if(turn == 6){
            setCompletedOperations([...completedOperations,currentOperation]);
            setGameStatus("Lost");
            return;
        }

        setCompletedOperations([...completedOperations,currentOperation]);
        setTurn(turn+1);
        setCurrentOperation("");
    }

    return (
    <>
        <div className={styles.mainContainer}>
        {
            completedOperations.map((operation,i) =>(
                <RowCompleted key={i} operation={operation} solution={operationOfTheDay}/>
            ))
        }
        {
            gameStatus == "Playing"? <RowCurrent operation={currentOperation}/>:null
        }
        {
            Array.from(Array(6-turn)).map((_,i)=>(
                <RowEmpty key={i}/>
            ))
        }
    </div>
    <KeyBoard keys={keys} onKeyPressed={onKeyPressed}/>
    </>
    );
}