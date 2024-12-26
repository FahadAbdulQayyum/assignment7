export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const data = await res.json();

    return {
        props: { data },
    };
}


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface ServerFetchingProps {
    data: Product;
}

export default function ServerFetching({ data }: ServerFetchingProps) {
    return (
        <div>
            <h1>Server Fetching</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}