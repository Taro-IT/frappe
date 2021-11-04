import { getSelectorsByUserAgent } from 'react-device-detect';
import { Navbar, NavbarMobile } from '../..';

import styles from './EcommerceLayout.module.scss';

export const EcommerceLayout = ({ children, userAgent }: any) => {
  const { isMobile } = getSelectorsByUserAgent(userAgent)
  return(
    <div>
  { isMobile ? <NavbarMobile /> : <Navbar /> }

  <div className="flex flex-col flex-grow pt-20">
    { children }
  </div>
  </div>
  )
};

