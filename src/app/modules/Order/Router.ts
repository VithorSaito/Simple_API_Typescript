import { Product } from '@prisma/client';
import { prismaClient } from '@src/util/prismaClient';
import { Router } from 'express';

const router = Router();

async function validateUserId(userId: number) {
    try {
        const user = await prismaClient.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;

    } catch (error) {
        throw new Error('Error validating user');
    }


}

async function validateProductId(productId: number) {
    try {
        const product = await prismaClient.product.findUnique({
            where: {
                id: productId
            }
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return product

    } catch (error) {
        throw new Error('Error validating product');
    }
}

router.post('/create', async function (req, res) {
    const { userId, name, description, productsIds } = req.body;

    try {

        const user = await validateUserId(userId);

        const order = await prismaClient.order.create({
            data: {
                userId: user.id,
                name,
                description,
            }
        });

        const products: Product[] = []

        for await (const productId of productsIds) {

            const product = await validateProductId(productId);

            await prismaClient.productOrder.create({
                data: {
                    productId: product.id,
                    orderId: order.id
                }
            });

            products.push(product)

        }

        return res.status(200).json({ order, products });
    } catch (error) {
        return res.status(400).json(error);
    }
});

export default router;