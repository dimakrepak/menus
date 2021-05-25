import './card.css';

export default function Card({ res }) {
    return (
        <div className="card-container">
            <h3>{res.name}</h3>
        </div>
    )
}
