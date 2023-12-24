// Import necessary modules and configurations
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";

// Function to get the session using the authentication options
export async function getSession() {
  return await getServerSession(authOptions);
}

// Default function to get the current user information
export default async function getCurrentUser() {
  try {
    // Get the session using the getSession function
    const session = await getSession();

    // If the user is not logged in (session doesn't contain user email), return null
    if (!session?.user?.email) {
      return null;
    }

    // Fetch the user details from the database using the user's email
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
      // Include user orders in the result
      include: { orders: true },
    });

    // If the user is not found in the database, return null
    if (!currentUser) {
      return null;
    }

    // Format the user object before returning
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(), // Convert createdAt to ISO string
      updateAt: currentUser.updateAt.toISOString(), // Convert updateAt to ISO string
      emailVerified: currentUser.emailVerified?.toISOString() || null, // Convert emailVerified to ISO string or set to null if null
    };
  } catch (error: any) {
    // Log any errors that occur during the process
    console.log(error);
    return null;
  }
}
