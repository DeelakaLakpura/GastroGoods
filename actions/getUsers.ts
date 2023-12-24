// Importing the 'prisma' instance from the 'prismadb' module
import prisma from '@/libs/prismadb';

// Exporting an asynchronous function named 'getUsers'
export default async function getUsers() {
    try {
        // Attempting to retrieve a list of users using the 'findMany' method of the 'prisma.user' model
        const users = prisma?.user.findMany();

        // Returning the list of users
        return users;
    } catch (error: any) {
        // If an error occurs during the execution of the code in the 'try' block,
        // it will be caught here, and an error will be thrown with the error message
        throw new Error(error);
    }
}
