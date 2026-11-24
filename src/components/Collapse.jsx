import { useState } from 'react';
import arrow from '../assets/arrow.svg'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="collapse">
            <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img className={`collapse-arrow ${isOpen ? 'open' : ''}`} src={arrow} alt="" />
            </button>
                <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                    <p>{content}</p>
                </div>
        </div>
    );
}

export default Collapse;