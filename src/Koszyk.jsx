import './Koszyk.css';

function Koszyk(props) {
    return(
        <div>
            {props.d.nr}. {props.d.nazwa} szt.: {props.d.sztuk}
              cena: {props.d.cena*props.d.sztuk} zł.
               <button>+</button>
               <button onClick={props.fm}>
                -</button>
        </div>
    );
}
export default Koszyk;