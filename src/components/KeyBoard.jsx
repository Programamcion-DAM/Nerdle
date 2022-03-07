import styles from './keyboard.module.css';
export default function KeyBoard({keys,onKeyPressed}){
    function handleInput(e){
        onKeyPressed(e.target.textContent);
    }
    function handleEnter(e){
        onKeyPressed('ENTER');
    }
    function handleDelete(e){
        onKeyPressed('BACKSPACE');
    }

    return <div className={styles.keyboardContainer}>
        {Array.from(Array(10)).map((_,i)=>(
            <button key={i} className={styles.key} onClick={handleInput}>{keys[i]}</button>
        ))}
        {Array.from(Array(5)).map((_,i)=>(
            <button key={i+10} className={styles.key} onClick={handleInput}>{keys[i+10]}</button>
        ))}
        <button className={styles.enterKey} onClick={handleEnter}>ENTER</button>
        <button className={styles.deleteKey} onClick={handleDelete}>DELETE</button>
    </div>

}