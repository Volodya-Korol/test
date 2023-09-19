import { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header/Header';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
};
