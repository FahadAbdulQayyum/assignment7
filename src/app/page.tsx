"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface dataType {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: { rate: number, count: number },
  title: string,
}

const Page = () => {

  const [APIData, setAPIData] = useState<dataType[]>([
    // {
    //   "id": 0,
    //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //   "price": 109.95,
    //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //   "rating": {
    //     "rate": 3.9,
    //     "count": 120
    //   },
    // },
    // {
    //   "id": 1,
    //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //   "price": 109.95,
    //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //   "rating": {
    //     "rate": 3.9,
    //     "count": 120
    //   },
    // }
  ]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data: Response = await fetch('https://fakestoreapi.com/products');
      const dataJson: dataType[] = await data.json();
      console.log('data...', dataJson);
      setAPIData(dataJson)
    }

    fetchAPI();
  }, [])

  return (
    <div>
      {
        APIData.length
          ?
          <>
            {APIData?.map((v, i) => <div key={i} className="flex bg-gray-200 text-black my-2">
              <h1>{v.title}</h1>
              <Image src={v.image} alt={v.title} width={50} height={50} />
            </div>)}
          </>
          :
          <>
            Loading...!
          </>
      }
    </div >
  )
}

export default Page
