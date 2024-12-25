"use client"

import React, { useEffect } from 'react'

interface ClientFetchingType {
    category: String,
    description: String,
    id: Number,
    image: String,
    price: Number,
    rating: { rate: Number, count: Number },
    title: String,
}

const ClientFetching = () => {
    useEffect(() => {
        const fetchFunction = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1');
                const data: ClientFetchingType = await response.json();
                console.log('data...', data);
            } catch (error) {
                console.error('error...', error);
            }
        }
        fetchFunction();
    }, [])
    return (
        <div>

        </div>
    )
}

export default ClientFetching













// import React, { useEffect, useState } from 'react'

// const ClientFetching = () => {

//     const [data, setData] = useState<any>();
//     const [loading, setLoading] = useState<any>(false);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products/1')
//             .then(res => res.json())
//             .then(json =>
//                 console.log('ers...', json);
//             // setData(json)
//                 )
// }, [])

// return <div>
//     {
//         loading ? <>Loading...</> : (
//             <>
//                 {data?.map((v, index) => (
//                     <div key={index}>{/* Render your data here */}</div>
//                 ))}
//             </>
//         )
//     }
// </div>
// }

// export default ClientFetching;
