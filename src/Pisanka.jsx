import './Pisanka.css';

function Pisanka(props){
    return(
        <div className='pisanka'>
            <h1>pisanka nr {props.d.nr}</h1>
            <img className="grafika" src={props.d.img} alt={props.d.nazwa} />
            <p className='nazwa'>{props.d.nazwa}</p>
            <p className='cena'>cena: {props.d.cena} zł</p>
            <button className='dokoszyka'onClick={props.f}>
                dodaj do koszyka</button>
        </div>
    );
}
export default Pisanka;