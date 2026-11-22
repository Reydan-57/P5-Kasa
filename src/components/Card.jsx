function Card({ logement }) {
    return (
        <div className="card"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.40)), url(${logement.cover})`}}
        >
            <h2>{logement.title}</h2>
        </div>
    );
}

export default Card;