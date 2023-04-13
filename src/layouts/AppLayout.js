import Header from '@/components/Header';
import React from 'react';
import AppContainer from '../components/AppContainer';
import Footer from '../components/Footer';

export default function AppLayout({ children }) {
  return (
    <>
      <AppContainer>
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="mx-auto w-full flex-1 px-4 sm:px-8 py-20">
            {children}
          </main>
          <Footer />
        </div>
      </AppContainer>
    </>
  );
}
