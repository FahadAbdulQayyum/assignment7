import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('https://fakestoreapi.com/products/1');
            const data = await response.json();
            return res.status(200).json({ data });
        } catch (error) {
            console.error('error...', error);
        }
    } else if (req.method === 'POST') {
        const { data } = req.body;
        res.status(200).json({ receivedData: data });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
