import { Sidebar, SidebarMobile } from '@frappe/common/design-system'
import React from 'react'
import { getSelectorsByUserAgent } from 'react-device-detect'

export const AdminLayout = ({children, sa}) => {
  const { isMobile } = getSelectorsByUserAgent(sa)
  return (
    isMobile ?
    (
      <div className="bg-gray-100 w-full h-screen flex flex-col">
        <SidebarMobile />
        <div className="flex flex-col flex-grow pt-20">
          {children}
        </div>
      </div>
    ) : (
      <div className="bg-gray-100 w-full h-screen flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-grow pt-20">
          {children}
        </div>
      </div>
    )
  )
}
