import './App.css';
import Pisanka from './Pisanka';
import pcz from './img/czerwona.png';
import pni from './img/niebieska.png';
import pro from './img/rozowa.png';

const pisanki = [
  {nr:1, img:pcz, nazwa:"Czerwona", cena: 1.25},
  {nr:2, img:pni, nazwa:"Niebeska", cena: 1.55},
  {nr:3, img:pro, nazwa:"Różowa", cena: 1.55},
];
let koszyk = [
  

];

function App() {
  function koszykPusty()
  {
    if(koszyk.length == 0)
     return " koszyk jest pusty";
  }
  return (
    <div className="App">
      <h1>Pisanki </h1>
      <Pisanka d={pisanki[0]} /> 

      <div className='koszyk'>
        <h1>zawartość koszyka</h1>
        {koszykPusty()}

      </div>

    </div>
  );
}

export default App;
