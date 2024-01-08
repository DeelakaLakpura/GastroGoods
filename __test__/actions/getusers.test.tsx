import getUsers from '@/actions/getUsers';
import prisma from '@/libs/prismadb';

jest.mock('@/libs/prismadb', () => ({
  __esModule: true,
  default: {
    user: {
      findMany: jest.fn(),
    },
  },
}));

describe('getUsers', () => {
  beforeEach(() => {
    // Clear mock calls and reset any mock implementation for prisma.user.findMany
    jest.clearAllMocks();
  });

  it('should return a list of users', async () => {
    // Mocking the prisma.user.findMany implementation
    (prisma.user.findMany as jest.Mock).mockResolvedValueOnce([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ]);

    // Calling the getUsers function
    const result = await getUsers();

    // Expectations
    expect(prisma.user.findMany).toHaveBeenCalled();
    expect(result).toEqual([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ]);
  });

  it('should handle errors', async () => {
    // Mocking the prisma.user.findMany implementation to throw an error
    (prisma.user.findMany as jest.Mock).mockRejectedValueOnce(new Error('Mocked error'));

    // Calling the getUsers function
    try {
      await getUsers();
    } catch (error) {
      // Expectations
      expect(prisma.user.findMany).toHaveBeenCalled();
    expect((error as Error).message).toBe('Mocked error');
    }
  });
});
