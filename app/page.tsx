import Link from 'next/link';

export default function HomePage() {
    return (
        <main style={{ padding: '20px' }}>
            <h1>Главная страница</h1>
            <ul>
                <li><Link href="/about">О проекте (Счетчик)</Link></li>
                <li><Link href="/blog/nextjs-vvedenie">Статья: Введение в Next.js</Link></li>
                <li><Link href="/blog/react-osnovy">Статья: Основы React</Link></li>
            </ul>
        </main>
    );
}