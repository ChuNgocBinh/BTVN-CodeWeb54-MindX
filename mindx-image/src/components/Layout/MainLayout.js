import React from 'react';
import Navbar from '../NavBar/NavBar';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="row container">{children}</div>
    </>
  )
}