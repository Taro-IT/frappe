import { Sidebar, SidebarMobile, FloatingButton } from '@frappe/common/design-system'
import React from 'react'
import { getSelectorsByUserAgent } from 'react-device-detect'
import clsx from 'clsx';

export const AdminLayout = ({children, userAgent}) => {
  const { isMobile } = getSelectorsByUserAgent(userAgent)

  return (
    <div className={ clsx('bg-gray-100 w-full h-screen flex', isMobile ? 'flex-col' : 'flex-row') }>
      { isMobile ? <SidebarMobile /> : <Sidebar /> }
      <div className="flex flex-col flex-1 pt-20">
          {children}
        </div>
      <FloatingButton/>
    </div>
  );
}
