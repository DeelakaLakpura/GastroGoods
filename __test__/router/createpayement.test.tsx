// __tests__/api.route.test.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { POST } from '@/app/api/create-payment-intent/route'; // Update with the correct path

jest.mock('@/actions/getCurrentUser', () => ({
    __esModule: true,
    default: jest.fn(),
  }));
  
  jest.mock('@/libs/prismadb', () => ({
    __esModule: true,
    default: {
      order: {
        findFirst: jest.fn(),
        update: jest.fn(),
        create: jest.fn(),
      },
    },
  }));
  
  jest.mock('stripe', () => ({
    __esModule: true,
    default: {
      paymentIntents: {
        retrieve: jest.fn(),
        update: jest.fn(),
        create: jest.fn(),
      },
    },
  }));
  
  describe('API route tests', () => {
    it('handles the POST request properly', async () => {
      // Mock request and response objects
      const req = {} as NextApiRequest;
      const res = {
        json: jest.fn(),
        error: jest.fn(),
      } as unknown as NextApiResponse<Response>; // Specify Response type
  
      // ... (rest of the test code)
    });
  });