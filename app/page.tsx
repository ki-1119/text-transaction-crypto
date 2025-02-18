'use client';

import cx from 'classnames';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import BadgeLayout from './components/BadgeLayout';
import Footer from './components/Footer';
import HeaderNav from './components/HeaderNav';
import LastActivity from './components/LastActivity';
import Preview from './components/Preview';
import { constTransaction } from './utils/consts';
import { TransactionContext } from './utils/contexts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [transactions, setTransactions] = useState<Array<{
    transaction_hash: string;
    block_timestamp: string;
  }> | null>(null);

  useEffect(() => {
    setTransactions(constTransaction);
  }, []);
  return (
    <TransactionContext.Provider value={transactions}>
      <div className={cx('bg-dark', inter.className)}>
        <HeaderNav></HeaderNav>
        <div className="flex min-w-[488px] justify-center">
          <div className="flex w-full flex-col items-center justify-center max-lg:px-6 lg:w-[1020px] xl:w-[1250px]">
            <LastActivity></LastActivity>
            <Preview></Preview>
            <BadgeLayout></BadgeLayout>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </TransactionContext.Provider>
  );
}
