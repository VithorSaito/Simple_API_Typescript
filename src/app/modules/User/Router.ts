import { prismaClient } from '@src/util/prismaClient';
import { Router } from 'express';

const router = Router();

router.post('/create', async function (req, res) {

    const data = req.body

    const users = await prismaClient.user.create({
        data
    })
    return res.status(200).json(users)
})

export default router;