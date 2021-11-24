import { getSelectorsByUserAgent } from 'react-device-detect'
import { FloatingButton, Footer, Navbar, NavbarMobile } from '../..';

export const EcommerceLayout = ({ children, userAgent }: any) => {
  const { isMobile } = getSelectorsByUserAgent(userAgent)
  return(
    <div className="relative min-h-screen flex flex-col">
  { isMobile ? <NavbarMobile /> : <Navbar /> }

  <div className="flex flex-col flex-grow pt-20 pb-44">
    { children }
  </div>
  <FloatingButton />
  <Footer/>
  </div>
  )
};

