import '../styles/Sales.css'

export default function Card(props){
    return(
        <div className="card">
            <div className="image">
                <img src={props.src} alt="img" />
            </div>
            <h3>{props.name}</h3>
            <h2>{props.price} USD</h2>
        </div>
    );
}