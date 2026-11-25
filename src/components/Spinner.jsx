function Spinner() {
    return (
        <div className="spinner-container" role="status">
            <div className="spinner" aria-hidden="true" />
            <p>Chargement en cours ...</p>
        </div>
    )
}

export default Spinner