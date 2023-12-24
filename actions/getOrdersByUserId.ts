// Importing the Prisma client instance from the "prismadb" library (assuming it's a Prisma client).
import prisma from "@/libs/prismadb";

// Defining an asynchronous function named getOrdersByUserId, which takes a userId as a parameter.
export default async function getOrdersByUserId(userId: string) {
  try {
    // Using Prisma client to retrieve orders from the database.
    const orders = await prisma.order.findMany({
      // Including related user information in the query result.
      include: {
        user: true,
      }, 
      // Sorting the results based on the createDate field in descending order.
      orderBy: {
        createDate: "desc",
      },
      // Filtering orders based on the provided userId.
      where: {
        userId: userId,
      },
    });

    // Returning the fetched orders.
    return orders;
  } catch (error: any) {
    // Handling any errors that occur during the database query and throwing a new Error.
    throw new Error(error);
  }
}
