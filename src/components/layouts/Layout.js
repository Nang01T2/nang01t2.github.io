import React from 'react';
import HeaderNav from './HeaderNav';

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
      <HeaderNav />
      <main className="relative pb-16">{children}</main>
    </div>
  );
}
