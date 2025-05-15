// app/form/layout.tsx
import React from 'react';
import Navbar from "@/lib/components/Navbar";


export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden py-10">
      <Navbar/>
      <main className='pr-[80px]'>{children}</main>
    </div>
  );
}
