import { getSelectorsByUserAgent } from 'react-device-detect'
import { Footer, Navbar, NavbarMobile } from '../..';

export const EcommerceLayout = ({ children, userAgent }: any) => {
  const { isMobile } = getSelectorsByUserAgent(userAgent)
  return(
    <div className="flex flex-col">
  { isMobile ? <NavbarMobile /> : <Navbar /> }

  <div className="flex flex-col flex-grow pt-20">
    { children }
  </div>
  <Footer/>
  </div>
  )
};

