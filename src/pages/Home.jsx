import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    const logements = useLoaderData();
    return (
        <div>
            <Banner
                title="Chez vous, partout et ailleurs"
                className="banner-home"
            />
            <div className="card-container">
                {logements.map((logement) => (
                    <Link className="card-link" key={logement.id} to={`/logement/${logement.id}`}>
                        <Card logement={logement} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home