// Importing the 'prisma' instance from the '@/libs/prismadb' module
import prisma from '@/libs/prismadb';

// Defining an interface 'IParams' with an optional property 'productId' of type string
interface IParams {
    productId?: string;
}

// Exporting an asynchronous function 'getProductById' that takes parameters of type 'IParams'
export default async function getProductById(params: IParams) {
    try {
        // Destructuring the 'productId' from the 'params' object
        const { productId } = params;

        // Using Prisma to find a unique product based on the provided 'productId'
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
            // Including related 'reviews' with associated 'user' data
            include: {
                reviews: {
                    include: {
                        user: true,
                    },
                    // Ordering reviews by 'createdDate' in descending order
                    orderBy: {
                        createdDate: 'desc',
                    },
                },
            },
        });

        // If no product is found, return null
        if (!product) {
            return null;
        }

        // Return the retrieved product with associated reviews
        return product;
    } catch (error: any) {
        // If an error occurs during execution, throw an error
        throw new Error(error);
    }
}
