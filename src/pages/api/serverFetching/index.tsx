import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('https://fakestoreapi.com/products/1');
            const data = await response.json();
            // console.log('data...', data);
            return res.status(200).json({ data });
        } catch (error) {
            console.error('error...', error);
        }

        // res.status(200).json({ message: 'Hello from my API!' });
    } else if (req.method === 'POST') {
        res.status(200).json({ receivedData: req.body });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}