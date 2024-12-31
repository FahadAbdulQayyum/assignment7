import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Fetching Demo</h1>
            <nav>
                <Link href="/client-fetching">Client Fetching</Link>
                <br />
                <Link href="/server-fetching">Server Fetching</Link>
            </nav>
        </div>
    );
}
