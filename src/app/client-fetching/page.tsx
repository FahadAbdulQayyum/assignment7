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