// Import the Prisma client instance from the 'prismadb' library/module
import prisma from '@/libs/prismadb';

// Define an asynchronous function named getOrders
export default async function getOrders() {
    try {
        // Use Prisma to retrieve a list of orders from the database
        const orders = await prisma.order.findMany({
            // Include related user information in the query result
            include: {
                user: true
            },
            // Order the results by the 'createDate' field in descending order (latest first)
            orderBy: {
                createDate: 'desc'
            }
        });

        // Return the retrieved orders
        return orders;
    } catch (error: any) {
        // If an error occurs during the execution of the try block, throw an error
        throw new Error(error);
    }
}
