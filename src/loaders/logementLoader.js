import logements from '../data/logements.json';

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function logementLoader() {
    await delay(500);
    return logements
}

export default logementLoader