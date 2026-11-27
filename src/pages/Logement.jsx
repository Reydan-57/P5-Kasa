import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Slideshow from '../components/Slideshow.jsx';

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <NotFound />;
    }

    return (
        <div>
            <h1>{logement.title}</h1>
            <p>{logement.description}</p>
            <Slideshow pictures={logement.pictures}/>
        </div>
    );
}

export default Logement;