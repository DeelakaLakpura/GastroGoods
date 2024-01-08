// File: src/libs/prismadb.ts
// Your Prisma client setup goes here

// File: src/getOrders.ts
// Remove the duplicate import statement for 'prisma'
// import prisma from '@/libs/prismadb';

export default async function getOrders() {
    try {
        const orders = await prisma.order.findMany({
            include: {
                user: true
            },
            orderBy: {
                createDate: 'desc'
            }
        });
        return orders;
    } catch (error: any) {
        throw new Error(error);
    }
}

// File: __tests__/getOrders.test.ts
import prisma from '@/libs/prismadb';

// Mocking the prisma library
jest.mock('@/libs/prismadb', () => ({
    __esModule: true,
    default: {
        order: {
            findMany: jest.fn()
        }
    }
}));

describe('getOrders', () => {
    it('should retrieve orders from the database', async () => {
        // Mock the Prisma client response
        const mockOrders = [
            { id: 1, createDate: new Date(), /* other properties */ },
            { id: 2, createDate: new Date(), /* other properties */ },
        ];
        (prisma.order.findMany as jest.Mock).mockResolvedValueOnce(mockOrders);

        // Call the function
        const result = await getOrders();

        // Assertions
        expect(result).toEqual(mockOrders);
        expect(prisma.order.findMany).toHaveBeenCalledWith({
            include: { user: true },
            orderBy: { createDate: 'desc' },
        });
    });

    it('should throw an error if there is an issue with Prisma', async () => {
        // Mock Prisma client to throw an error
        (prisma.order.findMany as jest.Mock).mockRejectedValueOnce(new Error('Prisma error'));

        // Assertions
        await expect(getOrders()).rejects.toThrowError('Prisma error');
        expect(prisma.order.findMany).toHaveBeenCalledWith({
            include: { user: true },
            orderBy: { createDate: 'desc' },
        });
    });
});
