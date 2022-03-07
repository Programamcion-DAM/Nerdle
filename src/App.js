import Wordle from './components/Wordle';
import  "./App.css";
import img from './man.png'
function App() {
  return (
    <>
    <header>
      <img src={img} alt=""/>
      <h1>.Nerdle</h1>
    </header>
    
    <hr style={{width:"500px"}}/>
    <Wordle/>
    </>
  );
}

export default App;
