import { createContext } from 'react';

export const TransactionContext = createContext<Array<{
  transaction_hash: string;
  block_timestamp: string;
}> | null>(null);
