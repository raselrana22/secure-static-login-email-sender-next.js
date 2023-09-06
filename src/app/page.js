// This is the default homepage of the website
'use client'

import { usePathname } from 'next/navigation'
import Welcome from './(startingPages)/welcome/page';
import LoginBeforeNavBar from './components/login-before-navbar';

export default function Home() {

  // The logic for using multiple layout when root layout define a specific layout
  const pathname = usePathname();
  let rootHome = true; // Use let to allow reassignment
  if (pathname !== '/') {
    rootHome = false;
  }

  return (
    <div>
      {rootHome ? (
        <div>
          <LoginBeforeNavBar />
          < Welcome />
        </div>
      ) : ''}
    </div>
  )
}
