"use client"

import React, { useEffect } from 'react'

interface ClientFetchingType {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: { rate: number, count: number },
    title: string,
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
            {/* Render fetched data here */}
        </div>
    )
}

export default ClientFetching