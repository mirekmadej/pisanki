import './App.css';
import { useState } from 'react';
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
  

];

function App() {
  function koszykPusty()
  {
    if(koszyk.length == 0)
     return " koszyk jest pusty";
  }
  let ilePisanek = pisanki.length;
  const [szt, setSzt] = useState(Array(ilePisanek).fill(0));

  function dodajPisanke(p)
  {
    //console.log(p);
    let sztP = szt.slice();
    sztP[p.nr]++;
    setSzt(sztP);
    if(koszyk[p.nr] === undefined)
    {
      let o = {nr:p.nr, nazwa:p.nazwa, sztuk:1, cena:p.cena};
      koszyk[p.nr] = o;
    }
    else
      koszyk[p.nr].sztuk++;
  }
  function zmniejszLiczbe(i)
  {
    let sztP = szt.slice();
    sztP[i]--;
    if(koszyk[i].sztuk > 1)
      koszyk[i].sztuk--;
    else
    {
      koszyk[i] = undefined;
    }

  }

  return (
    <div className="App">
      <h1>Pisanki </h1>
       
      {pisanki.map((e) => (
          <Pisanka key={e.nr} d={e} f={()=>dodajPisanke(e)}/>
      ))}

      <div className='koszyk'>
        <h1>zawartość koszyka</h1>
        {koszykPusty()}
        
        {koszyk.map((e) =>  (
          <Koszyk key={e.nr} d={e} fm={()=>zmniejszLiczbe(e.nr)}/>
        ))
        }

      </div>

    </div>
  );
}

export default App;
