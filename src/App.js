import './App.css';
import Pisanka from './Pisanka';
import Koszyk from './Koszyk';
import pcz from './img/czerwona.png';
import pni from './img/niebieska.png';
import pro from './img/rozowa.png';

const pisanki = [
  {nr:1, img:pcz, nazwa:"Czerwona", cena: 1.25},
  {nr:2, img:pni, nazwa:"Niebeska", cena: 1.55},
  {nr:3, img:pro, nazwa:"Różowa", cena: 1.55},
];
let koszyk = [
  {nr:1, nazwa:"Niebieska", sztuk:1, cena:1.55},

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
        <Koszyk d={koszyk[1]} />
        {koszyk.map((e) =>  (
          <Koszyk key={e.nr} d={e} />
        ))
        }

      </div>

    </div>
  );
}

export default App;
