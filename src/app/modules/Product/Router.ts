import { prismaClient } from '@src/util/prismaClient';
import { Router } from 'express';

const router = Router();

router.post('/create', async function (req, res) {

    const data = req.body;

    const products = await prismaClient.product.create({
        data
    })
    return res.status(200).send(products);
});

export default router;