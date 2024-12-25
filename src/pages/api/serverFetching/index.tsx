import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Hello from serverFetching API!' });
    } else if (req.method === 'POST') {
        const { data } = req.body;
        res.status(200).json({ receivedData: data });
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
