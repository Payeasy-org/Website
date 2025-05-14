// app/form/layout.tsx
import React from 'react';
import Navbar from "@/lib/components/Navbar";


export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden pt-10">
      <Navbar/>
      <main className='px-[80px]'>{children}</main>
    </div>
  );
}
