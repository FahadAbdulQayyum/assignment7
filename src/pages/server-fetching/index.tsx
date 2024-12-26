export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const data = await res.json();

    return {
        props: { data },
    };
}

export default function ServerFetching({ data }: any) {
    return (
        <div>
            <h1>Server Fetching</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}