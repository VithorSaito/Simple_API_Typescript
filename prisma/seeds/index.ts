import { Product, User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
    var userData: Array<Omit<User, "id" | "updatedAt" | "createdAt">> = [
        {
            name: "Vithor",
            surname: "Saito"
        },
        {
            name: "Daniel",
            surname: "Vaz"
        },
        {
            name: "Willson",
            surname: "Saito"
        },
        {
            name: "Cris",
            surname: "Ferreira"
        },
    ]

    await prisma.user.createMany({
        data: userData
    })

    var productsData: Array<Omit<Product, "id" | "updatedAt" | "createdAt" | "orderId">> = [
        {
            name: "Orange",
            description: "Delicious Fruit",
            price: 10,
            amount: 100
        },
        {
            name: "Apple",
            description: "Big apple",
            price: 5,
            amount: 75
        },
        {
            name: "Banana",
            description: "Silver bananas",
            price: 10,
            amount: 100
        },
        {
            name: "Grape",
            description: "Fruit of the Egipt",
            price: 10,
            amount: 100
        }
    ]

    await prisma.product.createMany({
        data: productsData
    })
}

main().then(() => {
    console.log("done")
}).catch(error => {
    console.log(error)
});

