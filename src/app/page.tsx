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

  const [APIData, setAPIData] = useState<dataType[]>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data: Response = await fetch('https://fakestoreapi.com/products');
      const dataJson: dataType[] = await data.json();
      setAPIData(dataJson)
    }

    fetchAPI();
  }, [])

  return (
    <div>
      {
        APIData.length
          ?
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {APIData?.map((v, i) => <div key={i}
              className="flex flex-col justify-center items-center p-5 bg-gray-200 text-black space-y-2 relative"
            >
              <p className="absolute top-2 right-2">{v.rating.count}</p>
              <p className="absolute top-2 left-2">
                {Array.from({ length: Math.round(v.rating.rate) }, (_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </p>
              <Image src={v.image} alt={v.title} width={200} height={200} />
              <p className="text-sm font-bold">{v.title}</p>
              <p className="text-sm capitalize">{v.category}</p>
              <p>Rs {v.price}/=</p>
            </div>)}
          </div>
          :
          <div className="flex">
            Loading...!
          </div>
      }
    </div >
  )
}

export default Page
