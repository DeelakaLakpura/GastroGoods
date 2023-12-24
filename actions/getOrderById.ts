// Import the 'prisma' instance from the '@/libs/prismadb' module.
import prisma from "@/libs/prismadb";

// Define an interface 'IParams' to represent the possible parameters for the getOrderById function.
interface IParams {
  orderId?: string; // Optional parameter representing the order ID.
}

// Define and export the 'getOrderById' function, which is an asynchronous function that retrieves an order by its ID.
export default async function getOrderById(params: IParams) {
  try {
    // Destructure the 'orderId' from the 'params' object.
    const { orderId } = params;

    // Use Prisma to query the database and retrieve a unique order based on the provided 'orderId'.
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    // If no order is found, return null.
    if (!order) return null;

    // If an order is found, return the order object.
    return order; 
  } catch (error: any) {
    // If an error occurs during the execution of the function, throw an error with the details.
    throw new Error(error);
  }
}
