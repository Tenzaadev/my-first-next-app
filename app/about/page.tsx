import Counter from './counter';

async function getInfo() {
    return {
        title: 'О проекте',
        description: 'Данные получены на сервере без useEffect.'
    };
}

export default async function AboutPage() {
    const info = await getInfo();
    return (
        <main style={{ padding: '20px' }}>
            <h1>{info.title}</h1>
            <p>{info.description}</p>
            <Counter />
        </main>
    );
}