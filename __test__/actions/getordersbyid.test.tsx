// __tests__/getOrdersByUserId.test.ts
import getOrdersByUserId from '@/actions/getOrdersByUserId';
import prisma from '@/libs/prismadb';

jest.mock('@/libs/prismadb', () => ({
  order: {
    findMany: jest.fn(),
  },
}));

describe('getOrdersByUserId function', () => {
  it('should fetch orders from the database for a given userId', async () => {
    const userId = 'exampleUserId';
    const mockOrders = [{ id: 1, createDate: new Date(), /* other fields */ }];

    // Mocking the Prisma client's findMany method to return mockOrders.
    (prisma.order.findMany as jest.Mock).mockResolvedValue(mockOrders);

    // Calling the function with the mocked userId.
    const result = await getOrdersByUserId(userId);

    // Assertions
    expect(result).toEqual(mockOrders);

    // Checking if Prisma client's findMany method was called with the correct parameters.
    expect(prisma.order.findMany).toHaveBeenCalledWith({
      include: {
        user: true,
      },
      orderBy: {
        createDate: 'desc',
      },
      where: {
        userId: 'exampleUserId',
      },
    });
  });

  it('should handle errors during the database query', async () => {
    const userId = 'exampleUserId';
    const mockError = new Error('Database error');

    // Mocking the Prisma client's findMany method to throw an error.
    (prisma.order.findMany as jest.Mock).mockRejectedValue(mockError);

    // Calling the function with the mocked userId.
    await expect(getOrdersByUserId(userId)).rejects.toThrowError(mockError.message);
  });
});
