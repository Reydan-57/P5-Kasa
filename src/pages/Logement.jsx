import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';

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
        </div>
    );
}

export default Logement;