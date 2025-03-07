import React from 'react'
import { ModeToggle } from '@/components/ui/toogle.mode'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <main className='w-full h-screen flex flex-col justify-center p-10'>
      <div className='self-end'>
        <ModeToggle />
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center space-y-6'>
        <h1 className='font-bold text-5xl tracking'>Welcome to Jamrock!</h1>
        <Button size={'lg'}>
          <Link href={'/sign-in'} className=''>
            Login
          </Link>
        </Button>
      </div>
    </main>
  )
}
