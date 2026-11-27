import { useState } from "react"

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextSlide() {
        setCurrentIndex(
            currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    }
    function prevSlide() {
        setCurrentIndex(
            currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    }
    console.log(currentIndex + 1, pictures.length);
    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt="Slideshow Image" />
            {pictures.length >= 2 && <>
                <button className="left-button" onClick={prevSlide}>g</button>
                <button className="right-button" onClick={nextSlide}>d</button>
                <p>{`${currentIndex + 1} / ${pictures.length}`}</p>
            </>}
        </div>
    )
}

export default Slideshow