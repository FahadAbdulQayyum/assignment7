"use client"

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
            {APIData?.map((v, i) => <div key={i}>
              <h1>{v.title}</h1>
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
