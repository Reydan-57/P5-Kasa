function Card({ logement }) {
    return (
        <div className="card"
            style={{ backgroundImage: `url(${logement.cover})` }}
        >
                <h2>{logement.title}</h2>
        </div>
    );
}

export default Card;