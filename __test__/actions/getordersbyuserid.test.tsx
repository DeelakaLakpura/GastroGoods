// getOrdersByUserId.test.ts

import getOrdersByUserId from "@/actions/getOrdersByUserId";
import prisma from "@/libs/prismadb";



jest.mock('@/libs/prismadb', () => ({
  __esModule: true,
  default: {
    order: {
      findMany: jest.fn(),
    },
  },
}));

describe('getOrdersByUserId', () => {
  it('should fetch orders from the database for a given userId', async () => {
    // Mock Prisma client's findMany function to return a sample result
    const sampleOrders = [{ id: 1, userId: 'user123', createDate: new Date() }];
    (prisma.order.findMany as jest.Mock).mockResolvedValue(sampleOrders);

    // Call the function with a userId
    const result = await getOrdersByUserId('user123');

    // Assertions
    expect(result).toEqual(sampleOrders);
    expect(prisma.order.findMany).toHaveBeenCalledWith({
      include: { user: true },
      orderBy: { createDate: 'desc' },
      where: { userId: 'user123' },
    });
  });

  it('should handle errors and throw an error', async () => {
    // Mock Prisma client's findMany function to throw an error
    (prisma.order.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));

    // Call the function with a userId
    await expect(getOrdersByUserId('user123')).rejects.toThrowError('Database error');

    // Assertions
    expect(prisma.order.findMany).toHaveBeenCalledWith({
      include: { user: true },
      orderBy: { createDate: 'desc' },
      where: { userId: 'user123' },
    });
  });
});
