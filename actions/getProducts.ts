// Importing the Prisma client instance from the "prismadb" module.
import prisma from "@/libs/prismadb";

// Defining an interface for the parameters that can be passed to the getProducts function.
export interface IProductParams {
  category?: string | null;
  searchTerm?: string | null;
}

// Defining the main function to fetch products based on specified parameters.
export default async function getProducts(params: IProductParams) {
  try {
    // Destructuring the parameters to extract category and searchTerm.
    const { category, searchTerm } = params;

    // Initializing a variable for the search string.
    let searchString = searchTerm;

    // If searchTerm is not provided, set searchString to an empty string.
    if (!searchTerm) {
      searchString = "";
    }

    // Initializing an empty object for the query.
    let query: any = {};

    // If category is provided, add it to the query object.
    if (category) {
      query.category = category;
    }

    // Fetching products from the Prisma database based on the specified criteria.
    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            // Searching for products where the name contains the searchString (case-insensitive).
            name: {
              contains: searchString,
              mode: "insensitive",
            },
            // Searching for products where the description contains the searchString (case-insensitive).
            description: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
      },
      // Including reviews associated with each product, along with user details.
      include: {
        reviews: {
          include: {
            user: true,
          },
          // Ordering reviews based on the creation date in descending order.
          orderBy: {
            createdDate: "desc",
          },
        },
      },
    });

    // Returning the fetched products.
    return products;
  } catch (error: any) {
    // Handling errors by throwing a new Error with the error message.
    throw new Error(error);
  }
}
