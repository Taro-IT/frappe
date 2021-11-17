import { Banner, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import {GiPriceTag} from 'react-icons/gi';
import {BiSupport} from 'react-icons/bi';
import { MdDeliveryDining } from 'react-icons/md';
import { FaCreativeCommonsNc } from 'react-icons/fa';
import styles  from '../styles/home.module.scss';

const HomePage = () => (
  <div>
    <Banner image={'https://cinica.mx/wp-content/uploads/2021/07/Copia-de-614A9813.jpg'}/>
    <div className="flex flex-row justify-around ">
      <ul className="flex flex-col justify-evenly">
          <li className="flex">
            {<MdDeliveryDining size={70} className={styles['icons']}/>}
            <div className="flex flex-col justify-center ">
            <b>ENVÍO A DOMICILIO.</b>
            <p className={styles['p']}>Recibe tu solicitud donde te encuentres.</p>
            </div>
          </li>
          <li className="flex">
              <BiSupport size={70} className={styles['icons']}/>
            <div className="flex flex-col justify-center ">
            <b>ATENCIÓN A CLIENTES.</b>
            <p className={styles['p']}>Trato personalizado a tu disposición.</p>
            </div>
          </li>
          <li className="flex">
            <GiPriceTag size={70} className={styles['icons']}/>
            <div className="flex flex-col justify-center ">
              <b>CUIDANDO TU ECONOMÍA</b>
              <p className={styles['p']}>Los mejores precios del mercado.</p>
            </div>
          </li>
          <li className="flex">
            <FaCreativeCommonsNc size={70} className={styles['icons']}/>
            <div className="flex flex-col justify-center ">
              <b>CONVIÉRTETE EN SOCIO</b>
              <p className={styles['p']}>Recibe precios especiales.</p>
            </div>
          </li>
        </ul>
      <div className="w-1/4" >
        <img src="https://cinica.mx/wp-content/uploads/2021/07/PHOTO-2020-07-29-18-00-33.jpg" />
      </div>
    </div>
  </div>
)

HomePage.Layout = EcommerceLayout;

export default withUserAgent(HomePage);
