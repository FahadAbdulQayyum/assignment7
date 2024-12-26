// "use client"

// import { useEffect, useState } from 'react';

// export default function ClientFetching() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products/1')
//             .then((response) => response.json())
//             .then((result) => {
//                 setData(result);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (!data) return <p>No data available</p>;

//     return (
//         <div>
//             <h1>Client Fetching</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// }
