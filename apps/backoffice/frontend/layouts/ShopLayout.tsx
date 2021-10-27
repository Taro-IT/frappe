import { Navbar, Sidebar, SidebarMobile } from '@frappe/common/design-system'
import React from 'react'
import { getSelectorsByUserAgent } from 'react-device-detect'
import clsx from 'clsx';

export const ShopLayout = ({children, sa}) => {
  const { isMobile } = getSelectorsByUserAgent(sa)

  return (
    <div className={ clsx('bg-gray-100 w-full h-screen flex', isMobile ? 'flex-col' : 'flex-row') }>
      {/* { isMobile ? <SidebarMobile /> : <Sidebar /> } */}
      <Navbar />
      <div className="flex flex-col flex-grow pt-20">
          {children}
        </div>
    </div>
  );
}
