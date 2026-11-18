function Banner({ title, className }) {
    return (
        <div
            className={`banner ${className || ''}`}>
            {title && <h1>{title}</h1>}
        </div>
    );
}

export default Banner;