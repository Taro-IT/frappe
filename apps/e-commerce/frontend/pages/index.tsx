import { EcommerceLanding, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';
import { GiPriceTag } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { MdDeliveryDining } from 'react-icons/md';
import { FaCreativeCommonsNc } from 'react-icons/fa';
import styles from '../styles/home.module.scss';
import React from 'react';

const img = "../public/img/banercillo1.jpg"
const HomePage = () => (
  <div>
    <EcommerceLanding images={img}/>
    <hr className="mb-5 mt-10" />
    <div className="grid grid gap-4 grid-cols-4 mb-10 ml-10">
      <div>
        {<MdDeliveryDining size={70} className={styles['icons']} />}
        <b>ENVÍO A DOMICILIO.</b>
        <p className={styles['p']}>Recibe tu solicitud donde te encuentres.</p>
      </div>
      <div>
        <BiSupport size={70} className={styles['icons']} />
        <b>ATENCIÓN A CLIENTES.</b>
        <p className={styles['p']}>Trato personalizado a tu disposición.</p>
      </div>
      <div>
        <GiPriceTag size={70} className={styles['icons']} />
        <b>CUIDANDO TU ECONOMÍA</b>
        <p className={styles['p']}>Los mejores precios del mercado.</p>
      </div>
      <div>
        <FaCreativeCommonsNc size={70} className={styles['icons']} />
        <b>CONVIÉRTETE EN SOCIO</b>
        <p className={styles['p']}>Recibe precios especiales.</p>
      </div>
    </div>
  </div>
);

HomePage.Layout = EcommerceLayout;

export default withUserAgent(HomePage);
